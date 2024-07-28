require('dotenv').config();
const sdk =  require('@api/poap'),
    ethers = require('ethers'),
    eventAbi = require('../abis/eventAbi.json'),
    fs = require('fs');
    const qr = require('qrcode');
const { generateQr, verifyMessage, genRandomNumbers } = require('../utils/helpers');
const Link = require('../models/links');
const User = require('../models/user');


const provider = new ethers.JsonRpcProvider("https://rpc.test.btcs.network");

const encryptedKey = fs.readFileSync("./.encryptKey.json", "utf8");


exports.createEvent = async (req, res) => {
    
    const {
        name,
        description,
        city,
        country,
        start_date,
        end_date,
        start_time,
        end_time,
        expiry_date,
        virtual_event,  
        email,
        event_url,
        event_template_id,
        private_event,
        notify_issuer,
        requested_codes,
        organizer,
        signature
    } = req.fields;

    const date = new Date(start_date);
    const startTime = new Date(start_time);
    const endTime = new Date(end_time);

    const epochTime = date.getTime();
    const startTimeEpoch = startTime.getTime();
    const endTimeEpoch = endTime.getTime();

    const img = req.files 
    const image = img.image.path

    const secret_code = genRandomNumbers();

    // console.log(img)
    console.log(image)
    console.log(epochTime,startTimeEpoch, endTimeEpoch)

    const message = JSON.stringify(req.files)

    try {

        let wallet = await ethers.Wallet.fromEncryptedJson(encryptedKey, process.env.PRIVATE_KEY_PASSWORD);

        wallet = wallet.connect(provider);

        // const signer = verifyMessage(message, signature)

        // get smart contract instance with ethers
        const contract =  new ethers.Contract(process.env.CONTRACT_ADDRESS, eventAbi, wallet);

        // make call to contract to create event
        const transaction = await contract.createNewEvent(organizer, name, description, city, epochTime, startTimeEpoch, endTimeEpoch, virtual_event, private_event);

        // await reciept
        const reciept = await transaction.wait()

        // if call successful (reciept) 
        if(reciept.status) {
            // make call to POAP endpoint
            console.log('create successful !')

            sdk.auth(process.env.POAP_API_KEY);
            sdk.pOSTEvents(
                {name,
                description,
                city,
                country,
                start_date,
                end_date,
                expiry_date,
                virtual_event,
                image,
                secret_code,
                email,
                event_url,
                event_template_id,
                private_event,
                notify_issuer,
                requested_codes
            }
            )
                .then(({ data }) =>{
                    // console.log(data)
                    // console.log(data)
                   return res.json(data)
                } )
                .catch(err => {return res.json({error: err.message, err: err})});
            
        } 
        
    } catch (error) {
        return res.status(400).json({error: error.message, error: error})
    }
}

exports.createEventTicket = async (req, res) => {
    const {
        ticketId,
        quantity,
        price,
        organizer
    } = req.fields;

    const {eventId} = req.params;

    try {

        let wallet = await ethers.Wallet.fromEncryptedJson(encryptedKey, process.env.PRIVATE_KEY_PASSWORD);

        wallet = wallet.connect(provider);

        const amt = ethers.parseEther('0.002')

        // get smart contract instance with ethers
        const contract =  new ethers.Contract(process.env.CONTRACT_ADDRESS, eventAbi, wallet);

        // make call to contract to create event
        const transaction = await contract.createEventTicket(eventId, organizer, [ticketId], [quantity], [price]);
        
         // await reciept
         const reciept = await transaction.wait()

         if(reciept.status) {
            res.status(201).json({reciept})
         }

        
    } catch (error) {
        return res.status(400).json({error: error.message, error: error})
    }
}

exports.rescheduleEvent = async (req, res) => {

    const {
        id,
        name,
        description,
        city,
        country,
        start_date,
        end_date,
        start_time,
        end_time,
        expiry_date,
        virtual_event,
        secret_code,
        email,
        event_url,
        event_template_id,
        private_event,
        notify_issuer,
        requested_codes,
        // wallet
        fancyId

    } = req.fields;

    try {

        const provider = new ethers.JsonRpcProvider(CORE_RPC_URL);

        const encryptedKey = fs.readFileSync("./.encryptKey.json", "utf8");
        let wallet = await ethers.Wallet.fromEncryptedJson(encryptedKey, process.env.PRIVATE_KEY_PASSWORD);

        wallet = wallet.connect(provider);

        // get smart contract instance with ethers
        const contract =  new ethers.Contract(process.env.CONTRACT_ADDRESS, eventAbi, wallet);

        // make call to contract to reschedule event
        const transaction = await contract.rescheduleEvent(id, start_date, start_time, end_time, virtual_event, private_event);

         // await reciept
         const reciept = await transaction.wait()

         // if call successful (reciept) 
         if(reciept.status) {
             // make call to POAP update events (/event/{fancyId})
             console.log('reschedule successful !')
             sdk.auth(process.env.POAP_API_KEY);
            
             sdk.pUTEvents(
                {
                    virtual_event,
                    private_event,
                    name,
                    description,
                    country,
                    city,
                    start_date,
                    end_date,
                    expiry_date,
                    event_url,
                    secret_code
                },
                {fancyId: fancyId}
            )
                .then(({ data }) => console.log(data))
                .catch(err => console.error(err));
             
         }else{
            console.log("error")
         }
         
        
    } catch (error) {
        res.json({error: error.message})
    }
}

// cancelEvent
exports.cancelEvent = async (req, res) => {
    const {
        organizer
    } = req.fields;

    const {eventId} = req.params;

    try {

        // make call to contract to cancel event

        let wallet = await ethers.Wallet.fromEncryptedJson(encryptedKey, process.env.PRIVATE_KEY_PASSWORD);

        wallet = wallet.connect(provider);

        // get smart contract instance with ethers
        const contract =  new ethers.Contract(process.env.CONTRACT_ADDRESS, eventAbi, wallet);

        // make call to contract to reschedule event
        const transaction = await contract.cancelEvent(eventId, organizer);

         // await reciept
         const reciept = await transaction.wait()

         if(reciept.status) {
            console.log('successful')
            res.status(200).json({message: 'success', data: reciept});
         }

        // if call successful (reciept) 
        // make call to POAP update events (/event/{fancyId})
         
        
    } catch (error) {
        res.json({error: error.message})
    }
}


exports.confirmEligibility = async (req, res) => {
    const {
        email,
        secretCode
    } = req.fields;

    const {eventId} = req.params;

    try {

        // check user details if dey exist

        const foundUser = await User.findOne({email})

        // confirm secretCode
        if(!foundUser) {
            throw new Error('you cant cliam')
        }

        console.log(secretCode, foundUser.secret)

        if(secretCode == foundUser.secret) {
            
            // findLink and populate

            const links = await Link.findOne({eventId})

            // console.log(links.links.length)
            if(links.count > links.links.length) {
                throw new Error("No available poaps at this time"); 
            }

            const firstActiveLink = links.links[links.count]; 

            // console.log(firstActiveLink.link)

            // updating count
            await Link.findOneAndUpdate({eventId}, {eventId: eventId, count: links.count + 1} , {returnOriginal: false})

            // get an unused url and respond with
            return res.status(200).json({data: firstActiveLink.link});   
        }
        
    } catch (error) {
        return res.status(400).json({error: error.message})
    }
}

exports.cliamPoap = async (req, res) => {
    const {
        email,
        ticketId,
    } = req.fields;

    const {eventId} = req.params;

    try {
        
        let wallet = await ethers.Wallet.fromEncryptedJson(encryptedKey, process.env.PRIVATE_KEY_PASSWORD);

        wallet = wallet.connect(provider);

        // get smart contract instance with ethers
        const contract =  new ethers.Contract(process.env.CONTRACT_ADDRESS, eventAbi, wallet);

        // recieve email and find associated address
        const foundAddr = await contract.getENSbyEmail(email);

        if(foundAddr[0] != 0) {
            // make call to contract to check if user has ticket
            const transaction = await contract.balanceOfTickets(eventId, foundAddr[1], ticketId)

            if(transaction.toString() < 1) {
                throw new Error('you have not purchased a ticket !!')
            }

            // generate secretCode
            const code = genRandomNumbers();

            let num = code

            const foundUser = await User.findOne({email})

            // check if user exists
            if(foundUser){
                // exists update
                let response = await User.findOneAndUpdate({email}, {email: email, secret: num});

                User.sendEmail(email, num);

                return res.status(201).json({message: 'successful', data: response});
            }
            
            // save details in database
            const response = await User.create({email: email, secret: num})

            // send an email to user with secret code
            User.sendEmail(email, num);

            return res.status(200).json({message: 'success', data: response});
        
        }

        // make call to contract to burn tickets
        
    } catch (error) {
        return res.status(400).json({error: error.message})
    }
}

exports.buyTicket = async (req, res) => {
    
    const {
        ticketId,
        quantity,
        address,
        price
    } = req.fields;

    const {eventId} = req.params;
    
    try {
        console.log(req.fields)

        let wallet = await ethers.Wallet.fromEncryptedJson(encryptedKey, process.env.PRIVATE_KEY_PASSWORD);

        wallet = wallet.connect(provider);

        const amt = ethers.parseEther('0.002')

        // get smart contract instance with ethers
        const contract = new ethers.Contract(process.env.CONTRACT_ADDRESS, eventAbi, wallet);

        // make call to contract to buy event ticket
        const transaction = await contract.buyTicket(eventId, [ticketId], [quantity], address, {value: amt});

        console.log(transaction)

         // await reciept
         const reciept = await transaction.wait()

         console.log(reciept)

         return res.status(200).json({message: 'successful', data: reciept})


    } catch (error) {
        return res.status(400).json({message: error.message, error: error})
    }
}

module.exports = exports;