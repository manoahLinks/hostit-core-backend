declare const GEtActionsClaimQr: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly qr_hash: {
                    readonly type: "string";
                    readonly maxLength: 6;
                    readonly minLength: 6;
                    readonly description: "A six-digit alphanumeric code used to claim a POAP. For example, in the mint-link https://app.poap.xyz/claim/2abwt1, the `qr_hash` is the code located at the end URL: 2abwt1.";
                    readonly examples: readonly ["2abwt1"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "number";
                    readonly description: "The numeric ID of the claim.";
                    readonly examples: readonly [13894783];
                };
                readonly qr_hash: {
                    readonly type: "string";
                    readonly maxLength: 6;
                    readonly minLength: 6;
                    readonly description: "A six-digit alphanumeric code used to claim a POAP. For example, in the mint-link https://app.poap.xyz/claim/2abwt1, the `qr_hash` is the code located at the end URL: 2abwt1.";
                    readonly examples: readonly ["2abwt1"];
                };
                readonly tx_hash: {
                    readonly type: "string";
                    readonly description: "The Gnosis Chain transaction hash.";
                    readonly examples: readonly ["0x238b1f8235e7c41e4a4b1bf8e90c9e152d2a772936554090b07865137a39428b"];
                };
                readonly event_id: {
                    readonly type: "number";
                    readonly description: "The numeric ID of the event.";
                    readonly examples: readonly [16947];
                };
                readonly beneficiary: {
                    readonly type: "string";
                    readonly description: "The Etherem address or email the collector claimed with. If ENS was used to claim then this will show the resolved Ethereum address.";
                    readonly examples: readonly ["0xf6b6f07862a02c85628b3a9688beae07fea9c863"];
                };
                readonly user_input: {
                    readonly type: "string";
                    readonly description: "The Ethereum address, ENS, or email the collector claimed with.";
                    readonly examples: readonly ["poap.eth"];
                };
                readonly signer: {
                    readonly type: "string";
                    readonly description: "The POAP-owned address that sent the transaction to mint the POAP.";
                    readonly examples: readonly ["0xc33557d52ed424A5B7014F06e4D98C4Bfc71eF59"];
                };
                readonly claimed: {
                    readonly type: "boolean";
                    readonly description: "Whether the claim code has been used or not.";
                    readonly examples: readonly [true];
                };
                readonly claimed_date: {
                    readonly type: "string";
                    readonly format: "date-time";
                    readonly description: "The datetime when the POAP was claimed.";
                    readonly examples: readonly ["2022-07-12T14:22:45.278Z"];
                };
                readonly created_date: {
                    readonly type: "string";
                    readonly format: "date-time";
                    readonly description: "The datetime when the claim codes were created.";
                    readonly examples: readonly ["2022-07-12T14:22:45.278Z"];
                };
                readonly is_active: {
                    readonly type: "boolean";
                    readonly description: "Whether the claim is active or not.";
                    readonly examples: readonly [true];
                };
                readonly secret: {
                    readonly type: "string";
                    readonly description: "An authentication code that’s unique to each individual mint-link. This code can be retrieved with the GET /actions/claim-qr endpoint.";
                };
                readonly event: {
                    readonly type: "object";
                    readonly properties: {
                        readonly id: {
                            readonly type: "number";
                            readonly description: "The numeric ID of the event.";
                            readonly examples: readonly [16947];
                        };
                        readonly fancy_id: {
                            readonly type: "string";
                            readonly description: "A string that uniquely identifies the event. This is generated based on the event name at event creation and cannot be edited.";
                            readonly maxLength: 256;
                            readonly examples: readonly ["example-event-2022"];
                        };
                        readonly name: {
                            readonly type: "string";
                            readonly description: "The name of the event.";
                            readonly maxLength: 256;
                            readonly examples: readonly ["Example event 2022"];
                        };
                        readonly description: {
                            readonly type: "string";
                            readonly description: "The description of the event. Max length is 1500 characters.";
                            readonly maxLength: 1500;
                            readonly examples: readonly ["This is an example event description"];
                        };
                        readonly city: {
                            readonly type: "string";
                            readonly description: "The city where event takes place. This field is optional for virtual events.";
                            readonly maxLength: 256;
                            readonly examples: readonly ["Buenos Aires"];
                        };
                        readonly country: {
                            readonly type: "string";
                            readonly description: "The country where the event takes place. This field is optional for virtual events.";
                            readonly maxLength: 256;
                            readonly examples: readonly ["Argentina"];
                        };
                        readonly event_url: {
                            readonly type: "string";
                            readonly description: "The URL of a website the attendees should visit.";
                            readonly examples: readonly ["https://poap.xyz"];
                        };
                        readonly image_url: {
                            readonly type: "string";
                            readonly description: "This provides the URL of the POAP image.\nTo request a smaller, lower resolution version of the image, simply append \"?size=small\" to the end of the URL. For example, \"https://poap.xyz/image.png?size=small\".";
                            readonly examples: readonly ["https://poap.xyz/image.png"];
                        };
                        readonly animation_url: {
                            readonly type: "string";
                            readonly description: "The URL of the POAP animation.";
                        };
                        readonly year: {
                            readonly type: "number";
                            readonly description: "The year the event took place.";
                            readonly examples: readonly [2022];
                        };
                        readonly start_date: {
                            readonly type: "string";
                            readonly format: "date";
                            readonly description: "The start date of the event. Must be in YYYY-MM-DD or MM-DD-YYYY format.";
                            readonly examples: readonly ["07-18-2022"];
                        };
                        readonly end_date: {
                            readonly type: "string";
                            readonly format: "date";
                            readonly description: "The end date of the event. Must be in YYYY-MM-DD or MM-DD-YYYY format.";
                            readonly examples: readonly ["07-20-2022"];
                        };
                        readonly expiry_date: {
                            readonly type: "string";
                            readonly format: "date";
                            readonly description: "The limit date for POAPs to be claimable for the event. Must be in YYYY-MM-DD or MM-DD-YYYY format.";
                            readonly examples: readonly ["08-31-2022"];
                        };
                        readonly from_admin: {
                            readonly type: "boolean";
                            readonly description: "Whether the event was created by a POAP admin.";
                            readonly examples: readonly [true];
                        };
                        readonly virtual_event: {
                            readonly type: "boolean";
                            readonly description: "Whether the event is virtual.";
                            readonly default: false;
                            readonly examples: readonly [true];
                        };
                        readonly event_template_id: {
                            readonly type: "number";
                            readonly description: "The ID of the event template for POAP’s claim page (https://app.poap.xyz/claim/xxxxxx).";
                            readonly default: 1;
                            readonly examples: readonly [1];
                        };
                        readonly private_event: {
                            readonly type: "boolean";
                            readonly description: "If true, the event is private and will be filtered out in POAP’s frontend. Test events should be made private.";
                            readonly default: false;
                            readonly examples: readonly [true];
                        };
                    };
                };
                readonly event_template: {
                    readonly type: readonly ["object", "null"];
                    readonly properties: {
                        readonly id: {
                            readonly type: "number";
                        };
                        readonly name: {
                            readonly type: "string";
                        };
                        readonly title_image: {
                            readonly type: "string";
                        };
                        readonly title_link: {
                            readonly type: "string";
                        };
                        readonly header_link_text: {
                            readonly type: "string";
                        };
                        readonly header_link_url: {
                            readonly type: "string";
                        };
                        readonly header_color: {
                            readonly type: "string";
                        };
                        readonly header_link_color: {
                            readonly type: "string";
                        };
                        readonly main_color: {
                            readonly type: "string";
                        };
                        readonly footer_color: {
                            readonly type: "string";
                        };
                        readonly left_image_url: {
                            readonly type: "string";
                        };
                        readonly left_image_link: {
                            readonly type: "string";
                        };
                        readonly right_image_url: {
                            readonly type: "string";
                        };
                        readonly right_image_link: {
                            readonly type: "string";
                        };
                        readonly mobile_image_url: {
                            readonly type: "string";
                        };
                        readonly mobile_image_link: {
                            readonly type: "string";
                        };
                        readonly footer_icon: {
                            readonly type: "string";
                        };
                        readonly created_date: {
                            readonly type: "string";
                        };
                        readonly is_active: {
                            readonly type: "boolean";
                        };
                    };
                };
                readonly tx_status: {
                    readonly type: "string";
                    readonly description: "That status of the minting transaction: waiting_tx, pending, passed, failed, bumped";
                    readonly examples: readonly ["pending"];
                };
                readonly delegated_mint: {
                    readonly type: "boolean";
                    readonly description: "This is a deprecated property.";
                    readonly examples: readonly [false];
                };
                readonly delegated_signed_message: {
                    readonly type: "string";
                    readonly description: "This is a deprecated property.";
                };
                readonly result: {
                    readonly type: readonly ["object", "null"];
                    readonly properties: {
                        readonly token: {
                            readonly type: "number";
                            readonly description: "The token id.";
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GEtActionsScan: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly address: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The collector's Ethereum address or ENS.";
                };
                readonly eventId: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The numeric ID of the event.";
                };
            };
            readonly required: readonly ["address", "eventId"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly event: {
                    readonly type: "object";
                    readonly properties: {
                        readonly id: {
                            readonly type: "number";
                            readonly description: "The numeric ID of the event.";
                            readonly examples: readonly [16947];
                        };
                        readonly fancy_id: {
                            readonly type: "string";
                            readonly description: "A string that uniquely identifies the event. This is generated based on the event name at event creation and cannot be edited.";
                            readonly maxLength: 256;
                            readonly examples: readonly ["example-event-2022"];
                        };
                        readonly name: {
                            readonly type: "string";
                            readonly description: "The name of the event.";
                            readonly maxLength: 256;
                            readonly examples: readonly ["Example event 2022"];
                        };
                        readonly event_url: {
                            readonly type: "string";
                            readonly description: "The URL of a website the attendees should visit.";
                            readonly examples: readonly ["https://poap.xyz"];
                        };
                        readonly image_url: {
                            readonly type: "string";
                            readonly description: "This provides the URL of the POAP image.\nTo request a smaller, lower resolution version of the image, simply append \"?size=small\" to the end of the URL. For example, \"https://poap.xyz/image.png?size=small\".";
                            readonly examples: readonly ["https://poap.xyz/image.png"];
                        };
                        readonly country: {
                            readonly type: "string";
                            readonly description: "The country where the event takes place. This field is optional for virtual events.";
                            readonly maxLength: 256;
                            readonly examples: readonly ["Argentina"];
                        };
                        readonly city: {
                            readonly type: "string";
                            readonly description: "The city where event takes place. This field is optional for virtual events.";
                            readonly maxLength: 256;
                            readonly examples: readonly ["Buenos Aires"];
                        };
                        readonly description: {
                            readonly type: "string";
                            readonly description: "The description of the event. Max length is 1500 characters.";
                            readonly maxLength: 1500;
                            readonly examples: readonly ["This is an example event description"];
                        };
                        readonly year: {
                            readonly type: "number";
                            readonly description: "The year the event took place.";
                            readonly examples: readonly [2022];
                        };
                        readonly start_date: {
                            readonly type: "string";
                            readonly format: "date";
                            readonly description: "The start date of the event. Must be in YYYY-MM-DD or MM-DD-YYYY format.";
                            readonly examples: readonly ["07-18-2022"];
                        };
                        readonly end_date: {
                            readonly type: "string";
                            readonly format: "date";
                            readonly description: "The end date of the event. Must be in YYYY-MM-DD or MM-DD-YYYY format.";
                            readonly examples: readonly ["07-20-2022"];
                        };
                        readonly expiry_date: {
                            readonly type: "string";
                            readonly format: "date";
                            readonly description: "The limit date for POAPs to be claimable for the event. Must be in YYYY-MM-DD or MM-DD-YYYY format.";
                            readonly examples: readonly ["08-31-2022"];
                        };
                    };
                };
                readonly tokenId: {
                    readonly type: "string";
                    readonly description: "The unique POAP token ID.";
                    readonly examples: readonly ["3010642"];
                };
                readonly owner: {
                    readonly type: "string";
                    readonly description: "The POAP owner's address.";
                    readonly examples: readonly ["0x19C234364C70E45287B631BAA04e42BA58173f54"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GEtDeliveries: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly limit: {
                    readonly type: "number";
                    readonly description: "The amount of results per response (default = 10, max = 1000).";
                    readonly minimum: 0;
                    readonly maximum: 1000;
                    readonly default: 10;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly offset: {
                    readonly type: "number";
                    readonly description: "The offset to paginate the results.";
                    readonly default: 0;
                    readonly minimum: 0;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly event_id: {
                    readonly type: "number";
                    readonly description: "The numeric ID of the event.";
                    readonly examples: readonly [16947];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly approved: {
                    readonly type: "boolean";
                    readonly enum: readonly [true];
                    readonly description: "Whether the delivery has been approved or not.";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly address: {
                    readonly type: "string";
                    readonly description: "The collector's Ethereum address or ENS.";
                    readonly examples: readonly ["0x19C234364C70E45287B631BAA04e42BA58173f54"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly limit: {
                    readonly type: "number";
                    readonly description: "The amount of results per response (default = 10, max = 1000).";
                    readonly minimum: 0;
                    readonly maximum: 1000;
                    readonly default: 10;
                };
                readonly offset: {
                    readonly type: "number";
                    readonly description: "The offset to paginate the results.";
                    readonly default: 0;
                    readonly minimum: 0;
                };
                readonly total: {
                    readonly type: "number";
                    readonly description: "The total number of results to paginate.";
                };
                readonly deliveries: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly id: {
                                readonly type: "number";
                                readonly description: "The numeric ID of the delivery.";
                            };
                            readonly slug: {
                                readonly type: "string";
                                readonly description: "The unique identifying part of the delivery link: https://poap.delivery/{slug}";
                            };
                            readonly card_title: {
                                readonly type: "string";
                                readonly description: "The delivery title used in the card-level view on https://poap.delivery/.";
                            };
                            readonly card_text: {
                                readonly type: "string";
                                readonly description: "The delivery description used in the card-level view on https://poap.delivery/.";
                            };
                            readonly metadata_title: {
                                readonly type: "string";
                                readonly description: "The delivery metadata title used in social card previews when sharing the delivery link.";
                            };
                            readonly metadata_description: {
                                readonly type: "string";
                                readonly description: "The delivery metadata description used in social card previews when sharing the delivery link.";
                            };
                            readonly page_title: {
                                readonly type: "string";
                                readonly description: "The delivery title used in the page-level view on https://poap.delivery/{slug}.";
                            };
                            readonly page_title_image: {
                                readonly type: "string";
                                readonly description: "An image URL for the delivery image used alongside the title in the page-level view (https://poap.delivery/{slug}).";
                            };
                            readonly page_text: {
                                readonly type: "string";
                                readonly description: "The delivery description used in the page-level view on https://poap.delivery/{slug}.";
                            };
                            readonly event_ids: {
                                readonly type: "string";
                                readonly pattern: "^[1-9]{1}[0-9]*$";
                                readonly description: "The numeric ID of the drop to be delivered.";
                            };
                            readonly image: {
                                readonly type: "string";
                                readonly description: "An image URL for the delivery image used in the card-level view on the deliveries homepage (https://poap.delivery/) as well as the page-level view (https://poap.delivery/{slug}).";
                            };
                            readonly active: {
                                readonly type: "boolean";
                                readonly description: "Whether a delivery is currently active or not. If false, the delivery will not be claimable via website or API.";
                            };
                            readonly claimed_addresses: {
                                readonly type: "number";
                                readonly description: "The number of addresses that claimed the delivery.";
                            };
                            readonly total_addresses: {
                                readonly type: "number";
                                readonly description: "The total number of addresses for delivery.";
                            };
                            readonly private: {
                                readonly type: "boolean";
                                readonly description: "Whether a delivery is private or not. If false, the delivery will not be shown on the delivery homepage (https://poap.delivery/), but it will still be visible on the individual delivery page (https://poap.delivery/{slug}) if the slug is known.";
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GEtDelivery: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The numeric ID of the delivery.";
                };
            };
            readonly required: readonly ["id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "number";
                    readonly description: "The numeric ID of the delivery.";
                };
                readonly slug: {
                    readonly type: "string";
                    readonly description: "The unique identifying part of the delivery link: https://poap.delivery/{slug}";
                };
                readonly card_title: {
                    readonly type: "string";
                    readonly description: "The delivery title used in the card-level view on https://poap.delivery/.";
                };
                readonly card_text: {
                    readonly type: "string";
                    readonly description: "The delivery description used in the card-level view on https://poap.delivery/.";
                };
                readonly metadata_title: {
                    readonly type: "string";
                    readonly description: "The delivery metadata title used in social card previews when sharing the delivery link.";
                };
                readonly metadata_description: {
                    readonly type: "string";
                    readonly description: "The delivery metadata description used in social card previews when sharing the delivery link.";
                };
                readonly page_title: {
                    readonly type: "string";
                    readonly description: "The delivery title used in the page-level view on https://poap.delivery/{slug}.";
                };
                readonly page_title_image: {
                    readonly type: "string";
                    readonly description: "An image URL for the delivery image used alongside the title in the page-level view (https://poap.delivery/{slug}).";
                };
                readonly page_text: {
                    readonly type: "string";
                    readonly description: "The delivery description used in the page-level view on https://poap.delivery/{slug}.";
                };
                readonly event_ids: {
                    readonly type: "string";
                    readonly pattern: "^[1-9]{1}[0-9]*$";
                    readonly description: "The numeric ID of the drop to be delivered.";
                };
                readonly image: {
                    readonly type: "string";
                    readonly description: "An image URL for the delivery image used in the card-level view on the deliveries homepage (https://poap.delivery/) as well as the page-level view (https://poap.delivery/{slug}).";
                };
                readonly active: {
                    readonly type: "boolean";
                    readonly description: "Whether a delivery is currently active or not. If false, the delivery will not be claimable via website or API.";
                };
                readonly claimed_addresses: {
                    readonly type: "number";
                    readonly description: "The number of addresses that claimed the delivery.";
                };
                readonly total_addresses: {
                    readonly type: "number";
                    readonly description: "The total number of addresses for delivery.";
                };
                readonly private: {
                    readonly type: "boolean";
                    readonly description: "Whether a delivery is private or not. If false, the delivery will not be shown on the delivery homepage (https://poap.delivery/), but it will still be visible on the individual delivery page (https://poap.delivery/{slug}) if the slug is known.";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GEtDeliveryAddresses: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The numeric ID of the delivery.";
                };
            };
            readonly required: readonly ["id"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly limit: {
                    readonly type: "number";
                    readonly description: "The amount of results per response (default = 10, max = 1000).";
                    readonly minimum: 0;
                    readonly maximum: 1000;
                    readonly default: 10;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly offset: {
                    readonly type: "number";
                    readonly description: "The offset to paginate the results.";
                    readonly default: 0;
                    readonly minimum: 0;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly claimed: {
                    readonly type: "boolean";
                    readonly description: "Whether the address claimed the delivery or not.";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly items: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly address: {
                                readonly type: "string";
                                readonly description: "The collector's Ethereum address or ENS.";
                                readonly examples: readonly ["0x19C234364C70E45287B631BAA04e42BA58173f54"];
                            };
                            readonly claimed: {
                                readonly type: "boolean";
                                readonly description: "Whether the address claimed the delivery or not.";
                            };
                            readonly event_ids: {
                                readonly type: "string";
                                readonly pattern: "^[1-9]{1}[0-9]*$";
                                readonly description: "The numeric ID of the drop to be delivered.";
                            };
                            readonly events: {
                                readonly type: "array";
                                readonly items: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly id: {
                                            readonly type: "number";
                                            readonly description: "The numeric ID of the event.";
                                            readonly examples: readonly [16947];
                                        };
                                        readonly fancy_id: {
                                            readonly type: "string";
                                            readonly description: "A string that uniquely identifies the event. This is generated based on the event name at event creation and cannot be edited.";
                                            readonly maxLength: 256;
                                            readonly examples: readonly ["example-event-2022"];
                                        };
                                        readonly name: {
                                            readonly type: "string";
                                            readonly description: "The name of the event.";
                                            readonly maxLength: 256;
                                            readonly examples: readonly ["Example event 2022"];
                                        };
                                        readonly description: {
                                            readonly type: "string";
                                            readonly description: "The description of the event. Max length is 1500 characters.";
                                            readonly maxLength: 1500;
                                            readonly examples: readonly ["This is an example event description"];
                                        };
                                        readonly city: {
                                            readonly type: "string";
                                            readonly description: "The city where event takes place. This field is optional for virtual events.";
                                            readonly maxLength: 256;
                                            readonly examples: readonly ["Buenos Aires"];
                                        };
                                        readonly country: {
                                            readonly type: "string";
                                            readonly description: "The country where the event takes place. This field is optional for virtual events.";
                                            readonly maxLength: 256;
                                            readonly examples: readonly ["Argentina"];
                                        };
                                        readonly event_url: {
                                            readonly type: "string";
                                            readonly description: "The URL of a website the attendees should visit.";
                                            readonly examples: readonly ["https://poap.xyz"];
                                        };
                                        readonly image_url: {
                                            readonly type: "string";
                                            readonly description: "This provides the URL of the POAP image.\nTo request a smaller, lower resolution version of the image, simply append \"?size=small\" to the end of the URL. For example, \"https://poap.xyz/image.png?size=small\".";
                                            readonly examples: readonly ["https://poap.xyz/image.png"];
                                        };
                                        readonly animation_url: {
                                            readonly type: "string";
                                            readonly description: "The URL of the POAP animation.";
                                        };
                                        readonly year: {
                                            readonly type: "number";
                                            readonly description: "The year the event took place.";
                                            readonly examples: readonly [2022];
                                        };
                                        readonly start_date: {
                                            readonly type: "string";
                                            readonly format: "date";
                                            readonly description: "The start date of the event. Must be in YYYY-MM-DD or MM-DD-YYYY format.";
                                            readonly examples: readonly ["07-18-2022"];
                                        };
                                        readonly end_date: {
                                            readonly type: "string";
                                            readonly format: "date";
                                            readonly description: "The end date of the event. Must be in YYYY-MM-DD or MM-DD-YYYY format.";
                                            readonly examples: readonly ["07-20-2022"];
                                        };
                                        readonly expiry_date: {
                                            readonly type: "string";
                                            readonly format: "date";
                                            readonly description: "The limit date for POAPs to be claimable for the event. Must be in YYYY-MM-DD or MM-DD-YYYY format.";
                                            readonly examples: readonly ["08-31-2022"];
                                        };
                                        readonly from_admin: {
                                            readonly type: "boolean";
                                            readonly description: "Whether the event was created by a POAP admin.";
                                            readonly examples: readonly [true];
                                        };
                                        readonly virtual_event: {
                                            readonly type: "boolean";
                                            readonly description: "Whether the event is virtual.";
                                            readonly default: false;
                                            readonly examples: readonly [true];
                                        };
                                        readonly event_template_id: {
                                            readonly type: "number";
                                            readonly description: "The ID of the event template for POAP’s claim page (https://app.poap.xyz/claim/xxxxxx).";
                                            readonly default: 1;
                                            readonly examples: readonly [1];
                                        };
                                        readonly private_event: {
                                            readonly type: "boolean";
                                            readonly description: "If true, the event is private and will be filtered out in POAP’s frontend. Test events should be made private.";
                                            readonly default: false;
                                            readonly examples: readonly [true];
                                        };
                                    };
                                };
                                readonly description: "An array with the events that the address can claim.";
                            };
                        };
                    };
                };
                readonly total: {
                    readonly type: "number";
                    readonly description: "The total number of results to paginate.";
                };
                readonly offset: {
                    readonly type: "number";
                    readonly description: "The offset to paginate the results.";
                    readonly default: 0;
                    readonly minimum: 0;
                };
                readonly limit: {
                    readonly type: "number";
                    readonly description: "The amount of results per response (default = 10, max = 1000).";
                    readonly minimum: 0;
                    readonly maximum: 1000;
                    readonly default: 10;
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GEtDeliveryAddressesAddress: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The numeric ID of the delivery.";
                };
                readonly address: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The collector's Ethereum address or ENS.";
                };
            };
            readonly required: readonly ["id", "address"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly address: {
                    readonly type: "string";
                    readonly description: "The collector's Ethereum address or ENS.";
                    readonly examples: readonly ["0x19C234364C70E45287B631BAA04e42BA58173f54"];
                };
                readonly claimed: {
                    readonly type: "boolean";
                    readonly description: "Whether the address claimed the delivery or not.";
                };
                readonly event_ids: {
                    readonly type: "string";
                    readonly pattern: "^[1-9]{1}[0-9]*$";
                    readonly description: "The numeric ID of the drop to be delivered.";
                };
                readonly events: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly id: {
                                readonly type: "number";
                                readonly description: "The numeric ID of the event.";
                                readonly examples: readonly [16947];
                            };
                            readonly fancy_id: {
                                readonly type: "string";
                                readonly description: "A string that uniquely identifies the event. This is generated based on the event name at event creation and cannot be edited.";
                                readonly maxLength: 256;
                                readonly examples: readonly ["example-event-2022"];
                            };
                            readonly name: {
                                readonly type: "string";
                                readonly description: "The name of the event.";
                                readonly maxLength: 256;
                                readonly examples: readonly ["Example event 2022"];
                            };
                            readonly description: {
                                readonly type: "string";
                                readonly description: "The description of the event. Max length is 1500 characters.";
                                readonly maxLength: 1500;
                                readonly examples: readonly ["This is an example event description"];
                            };
                            readonly city: {
                                readonly type: "string";
                                readonly description: "The city where event takes place. This field is optional for virtual events.";
                                readonly maxLength: 256;
                                readonly examples: readonly ["Buenos Aires"];
                            };
                            readonly country: {
                                readonly type: "string";
                                readonly description: "The country where the event takes place. This field is optional for virtual events.";
                                readonly maxLength: 256;
                                readonly examples: readonly ["Argentina"];
                            };
                            readonly event_url: {
                                readonly type: "string";
                                readonly description: "The URL of a website the attendees should visit.";
                                readonly examples: readonly ["https://poap.xyz"];
                            };
                            readonly image_url: {
                                readonly type: "string";
                                readonly description: "This provides the URL of the POAP image.\nTo request a smaller, lower resolution version of the image, simply append \"?size=small\" to the end of the URL. For example, \"https://poap.xyz/image.png?size=small\".";
                                readonly examples: readonly ["https://poap.xyz/image.png"];
                            };
                            readonly animation_url: {
                                readonly type: "string";
                                readonly description: "The URL of the POAP animation.";
                            };
                            readonly year: {
                                readonly type: "number";
                                readonly description: "The year the event took place.";
                                readonly examples: readonly [2022];
                            };
                            readonly start_date: {
                                readonly type: "string";
                                readonly format: "date";
                                readonly description: "The start date of the event. Must be in YYYY-MM-DD or MM-DD-YYYY format.";
                                readonly examples: readonly ["07-18-2022"];
                            };
                            readonly end_date: {
                                readonly type: "string";
                                readonly format: "date";
                                readonly description: "The end date of the event. Must be in YYYY-MM-DD or MM-DD-YYYY format.";
                                readonly examples: readonly ["07-20-2022"];
                            };
                            readonly expiry_date: {
                                readonly type: "string";
                                readonly format: "date";
                                readonly description: "The limit date for POAPs to be claimable for the event. Must be in YYYY-MM-DD or MM-DD-YYYY format.";
                                readonly examples: readonly ["08-31-2022"];
                            };
                            readonly from_admin: {
                                readonly type: "boolean";
                                readonly description: "Whether the event was created by a POAP admin.";
                                readonly examples: readonly [true];
                            };
                            readonly virtual_event: {
                                readonly type: "boolean";
                                readonly description: "Whether the event is virtual.";
                                readonly default: false;
                                readonly examples: readonly [true];
                            };
                            readonly event_template_id: {
                                readonly type: "number";
                                readonly description: "The ID of the event template for POAP’s claim page (https://app.poap.xyz/claim/xxxxxx).";
                                readonly default: 1;
                                readonly examples: readonly [1];
                            };
                            readonly private_event: {
                                readonly type: "boolean";
                                readonly description: "If true, the event is private and will be filtered out in POAP’s frontend. Test events should be made private.";
                                readonly default: false;
                                readonly examples: readonly [true];
                            };
                        };
                    };
                    readonly description: "An array with the events that the address can claim.";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GEtDeliverySlug: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly slug: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The unique identifying part of the delivery link: https://poap.delivery/{slug}";
                };
            };
            readonly required: readonly ["slug"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly active: {
                    readonly type: "boolean";
                    readonly description: "Whether a delivery is currently active or not. If false, the delivery will not be claimable via website or API.";
                };
                readonly card_text: {
                    readonly type: "string";
                    readonly description: "The delivery description used in the card-level view on https://poap.delivery/.";
                };
                readonly card_title: {
                    readonly type: "string";
                    readonly description: "The delivery title used in the card-level view on https://poap.delivery/.";
                };
                readonly claimed_addresses: {
                    readonly type: "number";
                    readonly description: "The number of addresses that claimed the delivery.";
                };
                readonly event_ids: {
                    readonly type: "string";
                    readonly pattern: "^[1-9]{1}[0-9]*$";
                    readonly description: "The numeric ID of the drop to be delivered.";
                };
                readonly id: {
                    readonly type: "number";
                    readonly description: "The numeric ID of the delivery.";
                };
                readonly slug: {
                    readonly type: "string";
                    readonly description: "The unique identifying part of the delivery link: https://poap.delivery/{slug}";
                };
                readonly image: {
                    readonly type: "string";
                    readonly description: "An image URL for the delivery image used in the card-level view on the deliveries homepage (https://poap.delivery/) as well as the page-level view (https://poap.delivery/{slug}).";
                };
                readonly metadata_title: {
                    readonly type: "string";
                    readonly description: "The delivery metadata title used in social card previews when sharing the delivery link.";
                };
                readonly metadata_description: {
                    readonly type: "string";
                    readonly description: "The delivery metadata description used in social card previews when sharing the delivery link.";
                };
                readonly page_text: {
                    readonly type: "string";
                    readonly description: "The delivery description used in the page-level view on https://poap.delivery/{slug}.";
                };
                readonly page_title: {
                    readonly type: "string";
                    readonly description: "The delivery title used in the page-level view on https://poap.delivery/{slug}.";
                };
                readonly page_title_image: {
                    readonly type: "string";
                    readonly description: "An image URL for the delivery image used alongside the title in the page-level view (https://poap.delivery/{slug}).";
                };
                readonly total_addresses: {
                    readonly type: "number";
                    readonly description: "The total number of addresses for delivery.";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GEtEventPoaps: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The numeric ID of the event.";
                };
            };
            readonly required: readonly ["id"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly limit: {
                    readonly type: "number";
                    readonly description: "The amount of results per response (max = 300).";
                    readonly minimum: 0;
                    readonly maximum: 300;
                    readonly default: 10;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly offset: {
                    readonly type: "number";
                    readonly description: "The offset to paginate the results.";
                    readonly default: 0;
                    readonly minimum: 0;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly limit: {
                    readonly type: "number";
                    readonly description: "The amount of results per response (max = 300).";
                    readonly minimum: 0;
                    readonly maximum: 300;
                    readonly default: 10;
                };
                readonly offset: {
                    readonly type: "number";
                    readonly description: "The offset to paginate the results.";
                    readonly default: 0;
                    readonly minimum: 0;
                };
                readonly total: {
                    readonly type: "number";
                    readonly description: "The total number of results to paginate.";
                };
                readonly transferCount: {
                    readonly type: "number";
                    readonly description: "The total number of tokens transfers.";
                };
                readonly tokens: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly created: {
                                readonly type: "string";
                                readonly description: "The time the POAP was minted in GnosisChain.";
                            };
                            readonly migrated: {
                                readonly type: "string";
                                readonly description: "The time the POAP was migrated to Ethereum Mainnet.";
                            };
                            readonly id: {
                                readonly type: "string";
                                readonly description: "The unique POAP token ID.";
                                readonly examples: readonly ["3010642"];
                            };
                            readonly owner: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly id: {
                                        readonly type: "string";
                                        readonly description: "The POAP owner's address.";
                                        readonly examples: readonly ["0x19C234364C70E45287B631BAA04e42BA58173f54"];
                                    };
                                    readonly tokensOwned: {
                                        readonly type: "number";
                                        readonly description: "The number of POAPs held by the owner's address.";
                                    };
                                    readonly ens: {
                                        readonly type: "string";
                                        readonly description: "The POAP owner's ENS address. If no reverse ENS resolution exists an empty string will be returned.";
                                    };
                                };
                            };
                            readonly transferCount: {
                                readonly type: "string";
                                readonly description: "The number of times the POAP has been transferred.";
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GEtEvents: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly fancyId: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "A string that uniquely identifies the event. This is generated based on the event name at event creation and cannot be edited.";
                };
            };
            readonly required: readonly ["fancyId"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "number";
                    readonly description: "The numeric ID of the event.";
                    readonly examples: readonly [16947];
                };
                readonly fancy_id: {
                    readonly type: "string";
                    readonly description: "A string that uniquely identifies the event. This is generated based on the event name at event creation and cannot be edited.";
                    readonly maxLength: 256;
                    readonly examples: readonly ["example-event-2022"];
                };
                readonly name: {
                    readonly type: "string";
                    readonly description: "The name of the event.";
                    readonly maxLength: 256;
                    readonly examples: readonly ["Example event 2022"];
                };
                readonly event_url: {
                    readonly type: "string";
                    readonly description: "The URL of a website the attendees should visit.";
                    readonly examples: readonly ["https://poap.xyz"];
                };
                readonly image_url: {
                    readonly type: "string";
                    readonly description: "This provides the URL of the POAP image.\nTo request a smaller, lower resolution version of the image, simply append \"?size=small\" to the end of the URL. For example, \"https://poap.xyz/image.png?size=small\".";
                    readonly examples: readonly ["https://poap.xyz/image.png"];
                };
                readonly country: {
                    readonly type: "string";
                    readonly description: "The country where the event takes place. This field is optional for virtual events.";
                    readonly maxLength: 256;
                    readonly examples: readonly ["Argentina"];
                };
                readonly city: {
                    readonly type: "string";
                    readonly description: "The city where event takes place. This field is optional for virtual events.";
                    readonly maxLength: 256;
                    readonly examples: readonly ["Buenos Aires"];
                };
                readonly description: {
                    readonly type: "string";
                    readonly description: "The description of the event. Max length is 1500 characters.";
                    readonly maxLength: 1500;
                    readonly examples: readonly ["This is an example event description"];
                };
                readonly year: {
                    readonly type: "number";
                    readonly description: "The year the event took place.";
                    readonly examples: readonly [2022];
                };
                readonly start_date: {
                    readonly type: "string";
                    readonly format: "date";
                    readonly description: "The start date of the event. Must be in YYYY-MM-DD or MM-DD-YYYY format.";
                    readonly examples: readonly ["07-18-2022"];
                };
                readonly end_date: {
                    readonly type: "string";
                    readonly format: "date";
                    readonly description: "The end date of the event. Must be in YYYY-MM-DD or MM-DD-YYYY format.";
                    readonly examples: readonly ["07-20-2022"];
                };
                readonly expiry_date: {
                    readonly type: "string";
                    readonly format: "date";
                    readonly description: "The limit date for POAPs to be claimable for the event. Must be in YYYY-MM-DD or MM-DD-YYYY format.";
                    readonly examples: readonly ["08-31-2022"];
                };
                readonly from_admin: {
                    readonly type: "boolean";
                    readonly description: "Whether the event was created by a POAP admin.";
                    readonly examples: readonly [true];
                };
                readonly virtual_event: {
                    readonly type: "boolean";
                    readonly description: "Whether the event is virtual.";
                    readonly default: false;
                    readonly examples: readonly [true];
                };
                readonly event_template_id: {
                    readonly type: "number";
                    readonly description: "The ID of the event template for POAP’s claim page (https://app.poap.xyz/claim/xxxxxx).";
                    readonly default: 1;
                    readonly examples: readonly [1];
                };
                readonly secret_code: {
                    readonly type: "string";
                    readonly pattern: "^[0-9]{6}$";
                    readonly description: "A six-digit numeric key defined when the event was created and is used to authorize performing certain actions on an event. Note: It's also call \"Edit Code\"";
                    readonly examples: readonly ["234789"];
                };
                readonly email: {
                    readonly type: "string";
                    readonly description: "The issuer's email address.";
                    readonly maxLength: 256;
                    readonly examples: readonly ["test@example.com"];
                };
                readonly private_event: {
                    readonly type: "boolean";
                    readonly description: "If true, the event is private and will be filtered out in POAP’s frontend. Test events should be made private.";
                    readonly default: false;
                    readonly examples: readonly [true];
                };
                readonly drop_image: {
                    readonly type: "object";
                    readonly description: "Users may request one of two types of images available. `dropImage` can be specified by `type` as `ORIGINAL` or `CROP` to receive desired image type.";
                    readonly properties: {
                        readonly public_id: {
                            readonly type: "string";
                            readonly description: "The ID of the drop image";
                            readonly examples: readonly ["fc101b69-ca2c-41f4-b65a-09be1ce1de31"];
                        };
                        readonly drop_id: {
                            readonly type: "number";
                            readonly description: "The ID of the drop";
                            readonly examples: readonly [44129];
                        };
                        readonly gateways: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly image_id: {
                                        readonly type: "string";
                                        readonly description: "The ID of the drop image";
                                        readonly examples: readonly ["fc101b69-ca2c-41f4-b65a-09be1ce1de31"];
                                    };
                                    readonly filename: {
                                        readonly type: "string";
                                        readonly description: "The filename of the drop image";
                                        readonly examples: readonly ["b57f0556-06ec-4267-8acd-dfa3bd93ed2f.jpeg"];
                                    };
                                    readonly mime_type: {
                                        readonly type: "string";
                                        readonly description: "The mime type of the drop image";
                                        readonly examples: readonly ["image/jpeg"];
                                    };
                                    readonly url: {
                                        readonly type: "string";
                                        readonly description: "The URL of the drop image";
                                        readonly examples: readonly ["https://assets.poap.xyz/b57f0556-06ec-4267-8acd-dfa3bd93e423.jpeg"];
                                    };
                                    readonly type: {
                                        readonly type: "string";
                                        readonly description: "The type of the drop image\n\n`CROP` `ORIGINAL`";
                                        readonly enum: readonly ["CROP", "ORIGINAL"];
                                    };
                                };
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GEtEventsId: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The numeric ID of the event.";
                };
            };
            readonly required: readonly ["id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "number";
                    readonly description: "The numeric ID of the event.";
                    readonly examples: readonly [16947];
                };
                readonly fancy_id: {
                    readonly type: "string";
                    readonly description: "A string that uniquely identifies the event. This is generated based on the event name at event creation and cannot be edited.";
                    readonly maxLength: 256;
                    readonly examples: readonly ["example-event-2022"];
                };
                readonly name: {
                    readonly type: "string";
                    readonly description: "The name of the event.";
                    readonly maxLength: 256;
                    readonly examples: readonly ["Example event 2022"];
                };
                readonly description: {
                    readonly type: "string";
                    readonly description: "The description of the event. Max length is 1500 characters.";
                    readonly maxLength: 1500;
                    readonly examples: readonly ["This is an example event description"];
                };
                readonly city: {
                    readonly type: "string";
                    readonly description: "The city where event takes place. This field is optional for virtual events.";
                    readonly maxLength: 256;
                    readonly examples: readonly ["Buenos Aires"];
                };
                readonly country: {
                    readonly type: "string";
                    readonly description: "The country where the event takes place. This field is optional for virtual events.";
                    readonly maxLength: 256;
                    readonly examples: readonly ["Argentina"];
                };
                readonly event_url: {
                    readonly type: "string";
                    readonly description: "The URL of a website the attendees should visit.";
                    readonly examples: readonly ["https://poap.xyz"];
                };
                readonly image_url: {
                    readonly type: "string";
                    readonly description: "This provides the URL of the POAP image.\nTo request a smaller, lower resolution version of the image, simply append \"?size=small\" to the end of the URL. For example, \"https://poap.xyz/image.png?size=small\".";
                    readonly examples: readonly ["https://poap.xyz/image.png"];
                };
                readonly animation_url: {
                    readonly type: "string";
                    readonly description: "The URL of the POAP animation.";
                };
                readonly year: {
                    readonly type: "number";
                    readonly description: "The year the event took place.";
                    readonly examples: readonly [2022];
                };
                readonly start_date: {
                    readonly type: "string";
                    readonly format: "date";
                    readonly description: "The start date of the event. Must be in YYYY-MM-DD or MM-DD-YYYY format.";
                    readonly examples: readonly ["07-18-2022"];
                };
                readonly end_date: {
                    readonly type: "string";
                    readonly format: "date";
                    readonly description: "The end date of the event. Must be in YYYY-MM-DD or MM-DD-YYYY format.";
                    readonly examples: readonly ["07-20-2022"];
                };
                readonly expiry_date: {
                    readonly type: "string";
                    readonly format: "date";
                    readonly description: "The limit date for POAPs to be claimable for the event. Must be in YYYY-MM-DD or MM-DD-YYYY format.";
                    readonly examples: readonly ["08-31-2022"];
                };
                readonly from_admin: {
                    readonly type: "boolean";
                    readonly description: "Whether the event was created by a POAP admin.";
                    readonly examples: readonly [true];
                };
                readonly virtual_event: {
                    readonly type: "boolean";
                    readonly description: "Whether the event is virtual.";
                    readonly default: false;
                    readonly examples: readonly [true];
                };
                readonly event_template_id: {
                    readonly type: "number";
                    readonly description: "The ID of the event template for POAP’s claim page (https://app.poap.xyz/claim/xxxxxx).";
                    readonly default: 1;
                    readonly examples: readonly [1];
                };
                readonly private_event: {
                    readonly type: "boolean";
                    readonly description: "If true, the event is private and will be filtered out in POAP’s frontend. Test events should be made private.";
                    readonly default: false;
                    readonly examples: readonly [true];
                };
                readonly drop_image: {
                    readonly type: "object";
                    readonly description: "Users may request one of two types of images available. `dropImage` can be specified by `type` as `ORIGINAL` or `CROP` to receive desired image type.";
                    readonly properties: {
                        readonly public_id: {
                            readonly type: "string";
                            readonly description: "The ID of the drop image";
                            readonly examples: readonly ["fc101b69-ca2c-41f4-b65a-09be1ce1de31"];
                        };
                        readonly drop_id: {
                            readonly type: "number";
                            readonly description: "The ID of the drop";
                            readonly examples: readonly [44129];
                        };
                        readonly gateways: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly image_id: {
                                        readonly type: "string";
                                        readonly description: "The ID of the drop image";
                                        readonly examples: readonly ["fc101b69-ca2c-41f4-b65a-09be1ce1de31"];
                                    };
                                    readonly filename: {
                                        readonly type: "string";
                                        readonly description: "The filename of the drop image";
                                        readonly examples: readonly ["b57f0556-06ec-4267-8acd-dfa3bd93ed2f.jpeg"];
                                    };
                                    readonly mime_type: {
                                        readonly type: "string";
                                        readonly description: "The mime type of the drop image";
                                        readonly examples: readonly ["image/jpeg"];
                                    };
                                    readonly url: {
                                        readonly type: "string";
                                        readonly description: "The URL of the drop image";
                                        readonly examples: readonly ["https://assets.poap.xyz/b57f0556-06ec-4267-8acd-dfa3bd93e423.jpeg"];
                                    };
                                    readonly type: {
                                        readonly type: "string";
                                        readonly description: "The type of the drop image\n\n`CROP` `ORIGINAL`";
                                        readonly enum: readonly ["CROP", "ORIGINAL"];
                                    };
                                };
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GEtHealthCheck: {
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GEtMetadata: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly eventId: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The numeric ID of the event.";
                };
                readonly tokenId: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The unique POAP token ID.";
                };
            };
            readonly required: readonly ["eventId", "tokenId"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly description: {
                    readonly type: "string";
                    readonly description: "The description of the event. Max length is 1500 characters.";
                    readonly maxLength: 1500;
                    readonly examples: readonly ["This is an example event description"];
                };
                readonly external_url: {
                    readonly type: "string";
                    readonly description: "The metadata external URL: https://api.poap.tech/metadata/{eventId}/{tokenId}";
                };
                readonly home_url: {
                    readonly type: "string";
                    readonly description: "The metadata home URL: https://api.poap.xyz/token/{tokenId}";
                };
                readonly image_url: {
                    readonly type: "string";
                    readonly description: "This provides the URL of the POAP image.\nTo request a smaller, lower resolution version of the image, simply append \"?size=small\" to the end of the URL. For example, \"https://poap.xyz/image.png?size=small\".";
                    readonly examples: readonly ["https://poap.xyz/image.png"];
                };
                readonly name: {
                    readonly type: "string";
                    readonly description: "The name of the event.";
                    readonly maxLength: 256;
                    readonly examples: readonly ["Example event 2022"];
                };
                readonly year: {
                    readonly type: "number";
                    readonly description: "The year the event took place.";
                    readonly examples: readonly [2022];
                };
                readonly tags: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                    };
                };
                readonly attributes: {
                    readonly type: "array";
                    readonly description: "An array of the metadata and respective values.";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly trait_type: {
                                readonly type: "string";
                            };
                            readonly value: {
                                readonly type: "string";
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GEtPaginatedEvents: {
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly items: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly id: {
                                readonly type: "number";
                                readonly description: "The numeric ID of the event.";
                                readonly examples: readonly [16947];
                            };
                            readonly fancy_id: {
                                readonly type: "string";
                                readonly description: "A string that uniquely identifies the event. This is generated based on the event name at event creation and cannot be edited.";
                                readonly maxLength: 256;
                                readonly examples: readonly ["example-event-2022"];
                            };
                            readonly name: {
                                readonly type: "string";
                                readonly description: "The name of the event.";
                                readonly maxLength: 256;
                                readonly examples: readonly ["Example event 2022"];
                            };
                            readonly description: {
                                readonly type: "string";
                                readonly description: "The description of the event. Max length is 1500 characters.";
                                readonly maxLength: 1500;
                                readonly examples: readonly ["This is an example event description"];
                            };
                            readonly city: {
                                readonly type: "string";
                                readonly description: "The city where event takes place. This field is optional for virtual events.";
                                readonly maxLength: 256;
                                readonly examples: readonly ["Buenos Aires"];
                            };
                            readonly country: {
                                readonly type: "string";
                                readonly description: "The country where the event takes place. This field is optional for virtual events.";
                                readonly maxLength: 256;
                                readonly examples: readonly ["Argentina"];
                            };
                            readonly event_url: {
                                readonly type: "string";
                                readonly description: "The URL of a website the attendees should visit.";
                                readonly examples: readonly ["https://poap.xyz"];
                            };
                            readonly image_url: {
                                readonly type: "string";
                                readonly description: "This provides the URL of the POAP image.\nTo request a smaller, lower resolution version of the image, simply append \"?size=small\" to the end of the URL. For example, \"https://poap.xyz/image.png?size=small\".";
                                readonly examples: readonly ["https://poap.xyz/image.png"];
                            };
                            readonly animation_url: {
                                readonly type: "string";
                                readonly description: "The URL of the POAP animation.";
                            };
                            readonly year: {
                                readonly type: "number";
                                readonly description: "The year the event took place.";
                                readonly examples: readonly [2022];
                            };
                            readonly start_date: {
                                readonly type: "string";
                                readonly format: "date";
                                readonly description: "The start date of the event. Must be in YYYY-MM-DD or MM-DD-YYYY format.";
                                readonly examples: readonly ["07-18-2022"];
                            };
                            readonly end_date: {
                                readonly type: "string";
                                readonly format: "date";
                                readonly description: "The end date of the event. Must be in YYYY-MM-DD or MM-DD-YYYY format.";
                                readonly examples: readonly ["07-20-2022"];
                            };
                            readonly expiry_date: {
                                readonly type: "string";
                                readonly format: "date";
                                readonly description: "The limit date for POAPs to be claimable for the event. Must be in YYYY-MM-DD or MM-DD-YYYY format.";
                                readonly examples: readonly ["08-31-2022"];
                            };
                            readonly from_admin: {
                                readonly type: "boolean";
                                readonly description: "Whether the event was created by a POAP admin.";
                                readonly examples: readonly [true];
                            };
                            readonly virtual_event: {
                                readonly type: "boolean";
                                readonly description: "Whether the event is virtual.";
                                readonly default: false;
                                readonly examples: readonly [true];
                            };
                            readonly event_template_id: {
                                readonly type: "number";
                                readonly description: "The ID of the event template for POAP’s claim page (https://app.poap.xyz/claim/xxxxxx).";
                                readonly default: 1;
                                readonly examples: readonly [1];
                            };
                            readonly private_event: {
                                readonly type: "boolean";
                                readonly description: "If true, the event is private and will be filtered out in POAP’s frontend. Test events should be made private.";
                                readonly default: false;
                                readonly examples: readonly [true];
                            };
                            readonly drop_image: {
                                readonly type: "object";
                                readonly description: "Users may request one of two types of images available. `dropImage` can be specified by `type` as `ORIGINAL` or `CROP` to receive desired image type.";
                                readonly properties: {
                                    readonly public_id: {
                                        readonly type: "string";
                                        readonly description: "The ID of the drop image";
                                        readonly examples: readonly ["fc101b69-ca2c-41f4-b65a-09be1ce1de31"];
                                    };
                                    readonly drop_id: {
                                        readonly type: "number";
                                        readonly description: "The ID of the drop";
                                        readonly examples: readonly [44129];
                                    };
                                    readonly gateways: {
                                        readonly type: "array";
                                        readonly items: {
                                            readonly type: "object";
                                            readonly properties: {
                                                readonly image_id: {
                                                    readonly type: "string";
                                                    readonly description: "The ID of the drop image";
                                                    readonly examples: readonly ["fc101b69-ca2c-41f4-b65a-09be1ce1de31"];
                                                };
                                                readonly filename: {
                                                    readonly type: "string";
                                                    readonly description: "The filename of the drop image";
                                                    readonly examples: readonly ["b57f0556-06ec-4267-8acd-dfa3bd93ed2f.jpeg"];
                                                };
                                                readonly mime_type: {
                                                    readonly type: "string";
                                                    readonly description: "The mime type of the drop image";
                                                    readonly examples: readonly ["image/jpeg"];
                                                };
                                                readonly url: {
                                                    readonly type: "string";
                                                    readonly description: "The URL of the drop image";
                                                    readonly examples: readonly ["https://assets.poap.xyz/b57f0556-06ec-4267-8acd-dfa3bd93e423.jpeg"];
                                                };
                                                readonly type: {
                                                    readonly type: "string";
                                                    readonly description: "The type of the drop image\n\n`CROP` `ORIGINAL`";
                                                    readonly enum: readonly ["CROP", "ORIGINAL"];
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
                readonly total: {
                    readonly type: "number";
                    readonly description: "The total number of results to paginate.";
                };
                readonly offset: {
                    readonly type: "number";
                    readonly description: "The offset to paginate the results.";
                    readonly default: 0;
                    readonly minimum: 0;
                };
                readonly limit: {
                    readonly type: "number";
                    readonly description: "The amount of results per response (default = 10, max = 1000).";
                    readonly minimum: 0;
                    readonly maximum: 1000;
                    readonly default: 10;
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GEtRedeemRequestsActiveCount: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly event_id: {
                    readonly type: "number";
                    readonly description: "The numeric ID of the event.";
                    readonly examples: readonly [16947];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly redeem_type: {
                    readonly type: "string";
                    readonly enum: readonly ["qr_code", "secret_website", "secret_word"];
                    readonly description: "The type of redeem method you want to request. Options: qr_code, secret_website, secret_word. ";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly active: {
                    readonly type: "number";
                    readonly description: "The number of active redeem requests for the event.";
                };
                readonly type: {
                    readonly type: "string";
                    readonly enum: readonly ["secret_word", "secret_website", "qr_code"];
                    readonly description: "The type of redeem method requested: \n\n`secret_word` `secret_website` `qr_code`";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GEtSecret: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly secret_word: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The name of the secret claim. This is the `claim_name` entered when creating a Website or Secret Word claim.";
                };
            };
            readonly required: readonly ["secret_word"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "number";
                    readonly description: "The numeric ID of the secret.";
                    readonly examples: readonly [1];
                };
                readonly event_id: {
                    readonly type: "number";
                    readonly description: "The numeric ID of the event.";
                    readonly examples: readonly [1];
                };
                readonly event: {
                    readonly type: "object";
                    readonly properties: {
                        readonly id: {
                            readonly type: "number";
                            readonly description: "The numeric ID of the event.";
                            readonly examples: readonly [16947];
                        };
                        readonly fancy_id: {
                            readonly type: "string";
                            readonly description: "A string that uniquely identifies the event. This is generated based on the event name at event creation and cannot be edited.";
                            readonly maxLength: 256;
                            readonly examples: readonly ["example-event-2022"];
                        };
                        readonly name: {
                            readonly type: "string";
                            readonly description: "The name of the event.";
                            readonly maxLength: 256;
                            readonly examples: readonly ["Example event 2022"];
                        };
                        readonly description: {
                            readonly type: "string";
                            readonly description: "The description of the event. Max length is 1500 characters.";
                            readonly maxLength: 1500;
                            readonly examples: readonly ["This is an example event description"];
                        };
                        readonly city: {
                            readonly type: "string";
                            readonly description: "The city where event takes place. This field is optional for virtual events.";
                            readonly maxLength: 256;
                            readonly examples: readonly ["Buenos Aires"];
                        };
                        readonly country: {
                            readonly type: "string";
                            readonly description: "The country where the event takes place. This field is optional for virtual events.";
                            readonly maxLength: 256;
                            readonly examples: readonly ["Argentina"];
                        };
                        readonly event_url: {
                            readonly type: "string";
                            readonly description: "The URL of a website the attendees should visit.";
                            readonly examples: readonly ["https://poap.xyz"];
                        };
                        readonly image_url: {
                            readonly type: "string";
                            readonly description: "This provides the URL of the POAP image.\nTo request a smaller, lower resolution version of the image, simply append \"?size=small\" to the end of the URL. For example, \"https://poap.xyz/image.png?size=small\".";
                            readonly examples: readonly ["https://poap.xyz/image.png"];
                        };
                        readonly animation_url: {
                            readonly type: "string";
                            readonly description: "The URL of the POAP animation.";
                        };
                        readonly year: {
                            readonly type: "number";
                            readonly description: "The year the event took place.";
                            readonly examples: readonly [2022];
                        };
                        readonly start_date: {
                            readonly type: "string";
                            readonly format: "date";
                            readonly description: "The start date of the event. Must be in YYYY-MM-DD or MM-DD-YYYY format.";
                            readonly examples: readonly ["07-18-2022"];
                        };
                        readonly end_date: {
                            readonly type: "string";
                            readonly format: "date";
                            readonly description: "The end date of the event. Must be in YYYY-MM-DD or MM-DD-YYYY format.";
                            readonly examples: readonly ["07-20-2022"];
                        };
                        readonly expiry_date: {
                            readonly type: "string";
                            readonly format: "date";
                            readonly description: "The limit date for POAPs to be claimable for the event. Must be in YYYY-MM-DD or MM-DD-YYYY format.";
                            readonly examples: readonly ["08-31-2022"];
                        };
                        readonly from_admin: {
                            readonly type: "boolean";
                            readonly description: "Whether the event was created by a POAP admin.";
                            readonly examples: readonly [true];
                        };
                        readonly virtual_event: {
                            readonly type: "boolean";
                            readonly description: "Whether the event is virtual.";
                            readonly default: false;
                            readonly examples: readonly [true];
                        };
                        readonly event_template_id: {
                            readonly type: "number";
                            readonly description: "The ID of the event template for POAP’s claim page (https://app.poap.xyz/claim/xxxxxx).";
                            readonly default: 1;
                            readonly examples: readonly [1];
                        };
                        readonly private_event: {
                            readonly type: "boolean";
                            readonly description: "If true, the event is private and will be filtered out in POAP’s frontend. Test events should be made private.";
                            readonly default: false;
                            readonly examples: readonly [true];
                        };
                    };
                };
                readonly claim_name: {
                    readonly type: "string";
                    readonly description: "The name of the secret claim. This is the `claim_name` entered when creating a Website or Secret Word claim.";
                    readonly examples: readonly ["culture-form-firm"];
                };
                readonly from: {
                    readonly type: "string";
                    readonly description: "The date from which the secret is valid. Must be ISO format YYYY-MM-DDTHH-MM-SSZ.";
                    readonly format: "date-time";
                    readonly examples: readonly ["2022-07-18T00:01:00.000Z"];
                };
                readonly to: {
                    readonly type: "string";
                    readonly description: "The date to which the secret is valid. Must be ISO format YYYY-MM-DDTHH-MM-SSZ.";
                    readonly format: "date-time";
                    readonly examples: readonly ["2022-07-20T00:01:00.000Z"];
                };
                readonly timezone: {
                    readonly type: "number";
                    readonly description: "The timezone UTC offset for the secret date.";
                    readonly default: 0;
                    readonly minimum: -12;
                    readonly maximum: 12;
                    readonly examples: readonly [0];
                };
                readonly active: {
                    readonly type: "boolean";
                    readonly description: "Whether the secret is active.";
                    readonly default: true;
                    readonly examples: readonly [true];
                };
                readonly total: {
                    readonly type: "number";
                    readonly description: "The total number of claims available for the secret claim.";
                    readonly examples: readonly [10];
                };
                readonly claimed: {
                    readonly type: "number";
                    readonly description: "The number of claims already claimed for the secret claim.";
                    readonly examples: readonly [5];
                };
                readonly created_date: {
                    readonly type: "string";
                    readonly description: "The date when the secret was created.";
                    readonly format: "date-time";
                    readonly examples: readonly ["2022-01-01T00:00:00.000Z"];
                };
                readonly is_collectors_game_enabled: {
                    readonly type: "boolean";
                    readonly description: "Whether the owner has opted to include an anti farming game or not for this distribution method.";
                    readonly examples: readonly ["true"];
                };
                readonly type: {
                    readonly type: "string";
                    readonly enum: readonly ["word", "website"];
                    readonly description: "`word` `website`";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GEtToken: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly tokenId: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The unique POAP token ID.";
                };
            };
            readonly required: readonly ["tokenId"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly event: {
                    readonly type: "object";
                    readonly properties: {
                        readonly id: {
                            readonly type: "number";
                            readonly description: "The numeric ID of the event.";
                            readonly examples: readonly [16947];
                        };
                        readonly fancy_id: {
                            readonly type: "string";
                            readonly description: "A string that uniquely identifies the event. This is generated based on the event name at event creation and cannot be edited.";
                            readonly maxLength: 256;
                            readonly examples: readonly ["example-event-2022"];
                        };
                        readonly name: {
                            readonly type: "string";
                            readonly description: "The name of the event.";
                            readonly maxLength: 256;
                            readonly examples: readonly ["Example event 2022"];
                        };
                        readonly event_url: {
                            readonly type: "string";
                            readonly description: "The URL of a website the attendees should visit.";
                            readonly examples: readonly ["https://poap.xyz"];
                        };
                        readonly image_url: {
                            readonly type: "string";
                            readonly description: "This provides the URL of the POAP image.\nTo request a smaller, lower resolution version of the image, simply append \"?size=small\" to the end of the URL. For example, \"https://poap.xyz/image.png?size=small\".";
                            readonly examples: readonly ["https://poap.xyz/image.png"];
                        };
                        readonly country: {
                            readonly type: "string";
                            readonly description: "The country where the event takes place. This field is optional for virtual events.";
                            readonly maxLength: 256;
                            readonly examples: readonly ["Argentina"];
                        };
                        readonly city: {
                            readonly type: "string";
                            readonly description: "The city where event takes place. This field is optional for virtual events.";
                            readonly maxLength: 256;
                            readonly examples: readonly ["Buenos Aires"];
                        };
                        readonly description: {
                            readonly type: "string";
                            readonly description: "The description of the event. Max length is 1500 characters.";
                            readonly maxLength: 1500;
                            readonly examples: readonly ["This is an example event description"];
                        };
                        readonly year: {
                            readonly type: "number";
                            readonly description: "The year the event took place.";
                            readonly examples: readonly [2022];
                        };
                        readonly start_date: {
                            readonly type: "string";
                            readonly format: "date";
                            readonly description: "The start date of the event. Must be in YYYY-MM-DD or MM-DD-YYYY format.";
                            readonly examples: readonly ["07-18-2022"];
                        };
                        readonly end_date: {
                            readonly type: "string";
                            readonly format: "date";
                            readonly description: "The end date of the event. Must be in YYYY-MM-DD or MM-DD-YYYY format.";
                            readonly examples: readonly ["07-20-2022"];
                        };
                        readonly expiry_date: {
                            readonly type: "string";
                            readonly format: "date";
                            readonly description: "The limit date for POAPs to be claimable for the event. Must be in YYYY-MM-DD or MM-DD-YYYY format.";
                            readonly examples: readonly ["08-31-2022"];
                        };
                        readonly drop_image: {
                            readonly type: "object";
                            readonly description: "Users may request one of two types of images available. `dropImage` can be specified by `type` as `ORIGINAL` or `CROP` to receive desired image type.";
                            readonly properties: {
                                readonly public_id: {
                                    readonly type: "string";
                                    readonly description: "The ID of the drop image";
                                    readonly examples: readonly ["fc101b69-ca2c-41f4-b65a-09be1ce1de31"];
                                };
                                readonly drop_id: {
                                    readonly type: "number";
                                    readonly description: "The ID of the drop";
                                    readonly examples: readonly [44129];
                                };
                                readonly gateways: {
                                    readonly type: "array";
                                    readonly items: {
                                        readonly type: "object";
                                        readonly properties: {
                                            readonly image_id: {
                                                readonly type: "string";
                                                readonly description: "The ID of the drop image";
                                                readonly examples: readonly ["fc101b69-ca2c-41f4-b65a-09be1ce1de31"];
                                            };
                                            readonly filename: {
                                                readonly type: "string";
                                                readonly description: "The filename of the drop image";
                                                readonly examples: readonly ["b57f0556-06ec-4267-8acd-dfa3bd93ed2f.jpeg"];
                                            };
                                            readonly mime_type: {
                                                readonly type: "string";
                                                readonly description: "The mime type of the drop image";
                                                readonly examples: readonly ["image/jpeg"];
                                            };
                                            readonly url: {
                                                readonly type: "string";
                                                readonly description: "The URL of the drop image";
                                                readonly examples: readonly ["https://assets.poap.xyz/b57f0556-06ec-4267-8acd-dfa3bd93e423.jpeg"];
                                            };
                                            readonly type: {
                                                readonly type: "string";
                                                readonly description: "The type of the drop image\n\n`CROP` `ORIGINAL`";
                                                readonly enum: readonly ["CROP", "ORIGINAL"];
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
                readonly tokenId: {
                    readonly type: "string";
                    readonly description: "The unique POAP token ID.";
                    readonly examples: readonly ["3010642"];
                };
                readonly owner: {
                    readonly type: "string";
                    readonly description: "The POAP owner's address.";
                    readonly examples: readonly ["0x19C234364C70E45287B631BAA04e42BA58173f54"];
                };
                readonly layer: {
                    readonly type: "string";
                    readonly description: "The layer the POAP is currently on: Layer1 (Ethereum) or Layer2 (xDai/Gnosis).";
                };
                readonly supply: {
                    readonly type: "object";
                    readonly properties: {
                        readonly total: {
                            readonly type: "number";
                            readonly description: "The total amount of POAPs minted.";
                        };
                        readonly order: {
                            readonly type: "number";
                            readonly description: "The index for when this POAP was minted. If 20 POAPs were minted and this was the 3rd one to be minted, the value of order would be 3.";
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GEtTokenImage: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly tokenId: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The unique POAP token ID.";
                };
            };
            readonly required: readonly ["tokenId"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "string";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GEtTransactionRequests: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The Id of a Transaction Request";
                };
            };
            readonly required: readonly ["id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly uid: {
                    readonly type: "string";
                    readonly format: "uuid";
                    readonly description: "The UUID queried.";
                };
                readonly operation: {
                    readonly type: "string";
                };
                readonly status: {
                    readonly type: "string";
                    readonly description: "The POAP minting status: PENDING, IN_PROCESS, FINISH, FINISH_WITH_ERROR";
                };
                readonly result: {
                    readonly type: readonly ["object", "null"];
                    readonly properties: {
                        readonly tx_hash: {
                            readonly type: "string";
                            readonly description: "The POAP minting transaction hash. This will only be provided if `status` returns \"FINISH\".";
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const POstActionsClaimDeliveryV2: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly address: {
                readonly type: "string";
                readonly description: "The collector's Ethereum address or ENS.";
                readonly examples: readonly ["0x19C234364C70E45287B631BAA04e42BA58173f54"];
            };
            readonly id: {
                readonly type: "number";
                readonly description: "The numeric ID of the event.";
                readonly examples: readonly [16947];
            };
        };
        readonly required: readonly ["id", "address"];
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly queue_uid: {
                    readonly type: "string";
                    readonly description: "The UUID used to check the status of the POAP minting.";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const POstActionsClaimQr: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly address: {
                readonly type: "string";
                readonly description: "The collector’s Ethereum address, ENS, or email.";
                readonly examples: readonly ["0x19C234364C70E45287B631BAA04e42BA58173f54"];
            };
            readonly qr_hash: {
                readonly type: "string";
                readonly maxLength: 6;
                readonly minLength: 6;
                readonly description: "A six-digit alphanumeric code used to claim a POAP. For example, in the mint-link https://app.poap.xyz/claim/2abwt1, the `qr_hash` is the code located at the end URL: 2abwt1.";
                readonly examples: readonly ["2abwt1"];
            };
            readonly secret: {
                readonly type: "string";
                readonly description: "An authentication code that’s unique to each individual mint-link. This code can be retrieved with the GET /actions/claim-qr endpoint.";
                readonly examples: readonly ["string"];
            };
            readonly sendEmail: {
                readonly type: "boolean";
                readonly default: true;
                readonly examples: readonly [true];
            };
        };
        readonly required: readonly ["address", "qr_hash", "secret"];
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "number";
                    readonly description: "The numeric ID of the claim.";
                    readonly examples: readonly [13894783];
                };
                readonly qr_hash: {
                    readonly type: "string";
                    readonly maxLength: 6;
                    readonly minLength: 6;
                    readonly description: "A six-digit alphanumeric code used to claim a POAP. For example, in the mint-link https://app.poap.xyz/claim/2abwt1, the `qr_hash` is the code located at the end URL: 2abwt1.";
                    readonly examples: readonly ["2abwt1"];
                };
                readonly queue_uid: {
                    readonly type: "string";
                    readonly description: "The Transaction Request ID that can be used to identify the status of the transaction request using GET /transaction-requests/id.";
                    readonly examples: readonly [29];
                };
                readonly event_id: {
                    readonly type: "number";
                    readonly description: "The numeric ID of the event.";
                    readonly examples: readonly [16947];
                };
                readonly beneficiary: {
                    readonly type: "string";
                    readonly description: "The Etherem address or email the collector claimed with. If ENS was used to claim then this will show the resolved Ethereum address.";
                    readonly examples: readonly ["0xf6b6f07862a02c85628b3a9688beae07fea9c863"];
                };
                readonly user_input: {
                    readonly type: "string";
                    readonly description: "The Ethereum address, ENS, or email the collector claimed with.";
                    readonly examples: readonly ["poap.eth"];
                };
                readonly signer: {
                    readonly type: "string";
                    readonly description: "The POAP-owned address that sent the transaction to mint the POAP.";
                    readonly examples: readonly ["0xc33557d52ed424A5B7014F06e4D98C4Bfc71eF59"];
                };
                readonly claimed: {
                    readonly type: "boolean";
                    readonly description: "Whether the claim code has been used or not.";
                    readonly examples: readonly [true];
                };
                readonly claimed_date: {
                    readonly type: "string";
                    readonly format: "date-time";
                    readonly description: "The datetime when the POAP was claimed.";
                    readonly examples: readonly ["2022-07-12T14:22:45.278Z"];
                };
                readonly created_date: {
                    readonly type: "string";
                    readonly format: "date-time";
                    readonly description: "The datetime when the claim codes were created.";
                    readonly examples: readonly ["2022-07-12T14:22:45.278Z"];
                };
                readonly is_active: {
                    readonly type: "boolean";
                    readonly description: "Whether the claim is active or not.";
                    readonly examples: readonly [true];
                };
                readonly event: {
                    readonly type: "object";
                    readonly properties: {
                        readonly id: {
                            readonly type: "number";
                            readonly description: "The numeric ID of the event.";
                            readonly examples: readonly [16947];
                        };
                        readonly fancy_id: {
                            readonly type: "string";
                            readonly description: "A string that uniquely identifies the event. This is generated based on the event name at event creation and cannot be edited.";
                            readonly maxLength: 256;
                            readonly examples: readonly ["example-event-2022"];
                        };
                        readonly name: {
                            readonly type: "string";
                            readonly description: "The name of the event.";
                            readonly maxLength: 256;
                            readonly examples: readonly ["Example event 2022"];
                        };
                        readonly description: {
                            readonly type: "string";
                            readonly description: "The description of the event. Max length is 1500 characters.";
                            readonly maxLength: 1500;
                            readonly examples: readonly ["This is an example event description"];
                        };
                        readonly city: {
                            readonly type: "string";
                            readonly description: "The city where event takes place. This field is optional for virtual events.";
                            readonly maxLength: 256;
                            readonly examples: readonly ["Buenos Aires"];
                        };
                        readonly country: {
                            readonly type: "string";
                            readonly description: "The country where the event takes place. This field is optional for virtual events.";
                            readonly maxLength: 256;
                            readonly examples: readonly ["Argentina"];
                        };
                        readonly event_url: {
                            readonly type: "string";
                            readonly description: "The URL of a website the attendees should visit.";
                            readonly examples: readonly ["https://poap.xyz"];
                        };
                        readonly image_url: {
                            readonly type: "string";
                            readonly description: "This provides the URL of the POAP image.\nTo request a smaller, lower resolution version of the image, simply append \"?size=small\" to the end of the URL. For example, \"https://poap.xyz/image.png?size=small\".";
                            readonly examples: readonly ["https://poap.xyz/image.png"];
                        };
                        readonly animation_url: {
                            readonly type: "string";
                            readonly description: "The URL of the POAP animation.";
                        };
                        readonly year: {
                            readonly type: "number";
                            readonly description: "The year the event took place.";
                            readonly examples: readonly [2022];
                        };
                        readonly start_date: {
                            readonly type: "string";
                            readonly format: "date";
                            readonly description: "The start date of the event. Must be in YYYY-MM-DD or MM-DD-YYYY format.";
                            readonly examples: readonly ["07-18-2022"];
                        };
                        readonly end_date: {
                            readonly type: "string";
                            readonly format: "date";
                            readonly description: "The end date of the event. Must be in YYYY-MM-DD or MM-DD-YYYY format.";
                            readonly examples: readonly ["07-20-2022"];
                        };
                        readonly expiry_date: {
                            readonly type: "string";
                            readonly format: "date";
                            readonly description: "The limit date for POAPs to be claimable for the event. Must be in YYYY-MM-DD or MM-DD-YYYY format.";
                            readonly examples: readonly ["08-31-2022"];
                        };
                        readonly from_admin: {
                            readonly type: "boolean";
                            readonly description: "Whether the event was created by a POAP admin.";
                            readonly examples: readonly [true];
                        };
                        readonly virtual_event: {
                            readonly type: "boolean";
                            readonly description: "Whether the event is virtual.";
                            readonly default: false;
                            readonly examples: readonly [true];
                        };
                        readonly event_template_id: {
                            readonly type: "number";
                            readonly description: "The ID of the event template for POAP’s claim page (https://app.poap.xyz/claim/xxxxxx).";
                            readonly default: 1;
                            readonly examples: readonly [1];
                        };
                        readonly private_event: {
                            readonly type: "boolean";
                            readonly description: "If true, the event is private and will be filtered out in POAP’s frontend. Test events should be made private.";
                            readonly default: false;
                            readonly examples: readonly [true];
                        };
                    };
                };
                readonly delegated_mint: {
                    readonly type: "boolean";
                    readonly description: "This is a deprecated property.";
                    readonly examples: readonly [false];
                };
                readonly delegated_signed_message: {
                    readonly type: "string";
                    readonly description: "This is a deprecated property.";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const POstDeliveries: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly slug: {
                readonly type: "string";
                readonly description: "The unique identifying part of the delivery link: https://poap.delivery/{slug}";
                readonly examples: readonly ["string"];
            };
            readonly card_title: {
                readonly type: "string";
                readonly description: "The delivery title used in the card-level view on https://poap.delivery/.";
                readonly examples: readonly ["string"];
            };
            readonly card_text: {
                readonly type: "string";
                readonly description: "The delivery description used in the card-level view on https://poap.delivery/.";
                readonly examples: readonly ["string"];
            };
            readonly page_title: {
                readonly type: "string";
                readonly description: "The delivery title used in the page-level view on https://poap.delivery/{slug}.";
                readonly examples: readonly ["string"];
            };
            readonly page_text: {
                readonly type: "string";
                readonly description: "The delivery description used in the page-level view on https://poap.delivery/{slug}.";
                readonly examples: readonly ["string"];
            };
            readonly event_ids: {
                readonly type: "string";
                readonly pattern: "^[1-9]{1}[0-9]*$";
                readonly description: "The numeric ID of the drop to be delivered.";
                readonly examples: readonly ["string"];
            };
            readonly secret_codes: {
                readonly type: "string";
                readonly pattern: "^[0-9]{6}$";
                readonly description: "A six-digit numeric key defined when the event was created and is used to authorize performing certain actions on an event. Note: It's also call \"Edit Code\"";
                readonly examples: readonly ["234789"];
            };
            readonly image: {
                readonly type: "string";
                readonly description: "An image URL for the delivery image used in the card-level view on the deliveries homepage (https://poap.delivery/) as well as the page-level view (https://poap.delivery/{slug}).";
                readonly examples: readonly ["string"];
            };
            readonly page_title_image: {
                readonly type: "string";
                readonly description: "An image URL for the delivery image used alongside the title in the page-level view (https://poap.delivery/{slug}).";
                readonly examples: readonly ["string"];
            };
            readonly metadata_title: {
                readonly type: "string";
                readonly description: "The delivery metadata title used in social card previews when sharing the delivery link.";
                readonly examples: readonly ["string"];
            };
            readonly metadata_description: {
                readonly type: "string";
                readonly description: "The delivery metadata description used in social card previews when sharing the delivery link.";
                readonly examples: readonly ["string"];
            };
            readonly addresses: {
                readonly type: "array";
                readonly minItems: 1;
                readonly description: "The list of addresses for delivery.";
                readonly items: {
                    readonly type: "object";
                    readonly properties: {
                        readonly address: {
                            readonly type: "string";
                            readonly description: "The collector's Ethereum address or ENS.";
                            readonly examples: readonly ["0x19C234364C70E45287B631BAA04e42BA58173f54"];
                        };
                        readonly events: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "number";
                            };
                        };
                    };
                };
            };
        };
        readonly required: readonly ["slug", "card_title", "card_text", "page_title", "page_title_image", "page_text", "event_ids", "secret_codes", "image", "metadata_title", "metadata_description", "addresses"];
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "number";
                    readonly description: "The numeric ID of the delivery.";
                };
                readonly slug: {
                    readonly type: "string";
                    readonly description: "The unique identifying part of the delivery link: https://poap.delivery/{slug}";
                };
                readonly card_title: {
                    readonly type: "string";
                    readonly description: "The delivery title used in the card-level view on https://poap.delivery/.";
                };
                readonly card_text: {
                    readonly type: "string";
                    readonly description: "The delivery description used in the card-level view on https://poap.delivery/.";
                };
                readonly metadata_title: {
                    readonly type: "string";
                    readonly description: "The delivery metadata title used in social card previews when sharing the delivery link.";
                };
                readonly metadata_description: {
                    readonly type: "string";
                    readonly description: "The delivery metadata description used in social card previews when sharing the delivery link.";
                };
                readonly page_title: {
                    readonly type: "string";
                    readonly description: "The delivery title used in the page-level view on https://poap.delivery/{slug}.";
                };
                readonly page_title_image: {
                    readonly type: "string";
                    readonly description: "An image URL for the delivery image used alongside the title in the page-level view (https://poap.delivery/{slug}).";
                };
                readonly page_text: {
                    readonly type: "string";
                    readonly description: "The delivery description used in the page-level view on https://poap.delivery/{slug}.";
                };
                readonly event_ids: {
                    readonly type: "string";
                    readonly pattern: "^[1-9]{1}[0-9]*$";
                    readonly description: "The numeric ID of the drop to be delivered.";
                };
                readonly image: {
                    readonly type: "string";
                    readonly description: "An image URL for the delivery image used in the card-level view on the deliveries homepage (https://poap.delivery/) as well as the page-level view (https://poap.delivery/{slug}).";
                };
                readonly active: {
                    readonly type: "boolean";
                    readonly description: "Whether a delivery is currently active or not. If false, the delivery will not be claimable via website or API.";
                };
                readonly claimed_addresses: {
                    readonly type: "number";
                    readonly description: "The number of addresses that claimed the delivery.";
                };
                readonly total_addresses: {
                    readonly type: "number";
                    readonly description: "The total number of addresses for delivery.";
                };
                readonly private: {
                    readonly type: "boolean";
                    readonly description: "Whether a delivery is private or not. If false, the delivery will not be shown on the delivery homepage (https://poap.delivery/), but it will still be visible on the individual delivery page (https://poap.delivery/{slug}) if the slug is known.";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const POstEventQrCodes: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly secret_code: {
                readonly type: "string";
                readonly pattern: "^[0-9]{6}$";
                readonly description: "A six-digit numeric key defined when the event was created and is used to authorize performing certain actions on an event. Note: It's also call \"Edit Code\"";
                readonly examples: readonly ["234789"];
            };
        };
        readonly required: readonly ["secret_code"];
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The numeric ID of the event.";
                };
            };
            readonly required: readonly ["id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "array";
            readonly items: {
                readonly type: "object";
                readonly properties: {
                    readonly qr_hash: {
                        readonly type: "string";
                        readonly maxLength: 6;
                        readonly minLength: 6;
                        readonly description: "A six-digit alphanumeric code used to claim a POAP. For example, in the mint-link https://app.poap.xyz/claim/2abwt1, the `qr_hash` is the code located at the end URL: 2abwt1.";
                        readonly examples: readonly ["2abwt1"];
                    };
                    readonly claimed: {
                        readonly type: "boolean";
                        readonly description: "Whether the code has been claimed or not.";
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const POstEventValidate: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly event_id: {
                readonly type: "number";
                readonly description: "The numeric ID of the event.";
                readonly examples: readonly [16947];
            };
            readonly secret_code: {
                readonly type: "string";
                readonly pattern: "^[0-9]{6}$";
                readonly description: "A six-digit numeric key defined when the event was created and is used to authorize performing certain actions on an event. Note: It's also call \"Edit Code\"";
                readonly examples: readonly ["234789"];
            };
        };
        readonly required: readonly ["event_id", "secret_code"];
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly valid: {
                    readonly type: "boolean";
                    readonly description: "Whether the secret code is valid for the event.";
                    readonly examples: readonly [true];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const POstEvents: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly name: {
                readonly type: "string";
                readonly description: "The name of the event.";
                readonly maxLength: 256;
                readonly examples: readonly ["Example event 2022"];
            };
            readonly description: {
                readonly type: "string";
                readonly description: "The description of the event. Max length is 1500 characters.";
                readonly maxLength: 1500;
                readonly examples: readonly ["This is an example event description"];
            };
            readonly city: {
                readonly type: "string";
                readonly description: "The city where event takes place. This field is optional for virtual events.";
                readonly maxLength: 256;
                readonly examples: readonly ["Buenos Aires"];
            };
            readonly country: {
                readonly type: "string";
                readonly description: "The country where the event takes place. This field is optional for virtual events.";
                readonly maxLength: 256;
                readonly examples: readonly ["Argentina"];
            };
            readonly start_date: {
                readonly type: "string";
                readonly format: "date";
                readonly description: "The start date of the event. Must be in YYYY-MM-DD or MM-DD-YYYY format.";
                readonly examples: readonly ["07-18-2022"];
            };
            readonly end_date: {
                readonly type: "string";
                readonly format: "date";
                readonly description: "The end date of the event. Must be in YYYY-MM-DD or MM-DD-YYYY format.";
                readonly examples: readonly ["07-20-2022"];
            };
            readonly expiry_date: {
                readonly type: "string";
                readonly format: "date";
                readonly description: "The limit date for POAPs to be claimable for the event. Must be in YYYY-MM-DD or MM-DD-YYYY format.";
                readonly examples: readonly ["08-31-2022"];
            };
            readonly event_url: {
                readonly type: "string";
                readonly description: "The URL of a website the attendees should visit.";
                readonly examples: readonly ["https://poap.xyz"];
            };
            readonly virtual_event: {
                readonly type: "boolean";
                readonly description: "Whether the event is virtual.";
                readonly default: false;
                readonly examples: readonly [true];
            };
            readonly image: {
                readonly type: "string";
                readonly format: "binary";
                readonly description: "The POAP image for the event. GIF and PNG images under 4 MB are supported.";
                readonly examples: readonly ["string"];
            };
            readonly secret_code: {
                readonly type: "string";
                readonly pattern: "^[0-9]{6}$";
                readonly description: "A six-digit numeric key defined when the event was created and is used to authorize performing certain actions on an event. Note: It's also call \"Edit Code\"";
                readonly examples: readonly ["234789"];
            };
            readonly event_template_id: {
                readonly type: "number";
                readonly description: "The ID of the event template for POAP’s claim page (https://app.poap.xyz/claim/xxxxxx).";
                readonly default: 1;
                readonly examples: readonly [1];
            };
            readonly email: {
                readonly type: "string";
                readonly description: "The issuer's email address.";
                readonly maxLength: 256;
                readonly examples: readonly ["test@example.com"];
            };
            readonly requested_codes: {
                readonly type: "number";
                readonly description: "The number of codes requested for the event.";
                readonly examples: readonly [10];
            };
            readonly private_event: {
                readonly type: "boolean";
                readonly description: "If true, the event is private and will be filtered out in POAP’s frontend. Test events should be made private.";
                readonly default: false;
                readonly examples: readonly [true];
            };
            readonly notify_issuer: {
                readonly type: "boolean";
                readonly description: "If false, the email with the mint links and the email with the edit code are not send";
                readonly default: true;
                readonly examples: readonly [true];
            };
        };
        readonly required: readonly ["name", "description", "city", "country", "start_date", "end_date", "expiry_date", "virtual_event", "image", "email", "secret_code"];
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "number";
                    readonly description: "The numeric ID of the event.";
                    readonly examples: readonly [16947];
                };
                readonly fancy_id: {
                    readonly type: "string";
                    readonly description: "A string that uniquely identifies the event. This is generated based on the event name at event creation and cannot be edited.";
                    readonly maxLength: 256;
                    readonly examples: readonly ["example-event-2022"];
                };
                readonly name: {
                    readonly type: "string";
                    readonly description: "The name of the event.";
                    readonly maxLength: 256;
                    readonly examples: readonly ["Example event 2022"];
                };
                readonly description: {
                    readonly type: "string";
                    readonly description: "The description of the event. Max length is 1500 characters.";
                    readonly maxLength: 1500;
                    readonly examples: readonly ["This is an example event description"];
                };
                readonly city: {
                    readonly type: "string";
                    readonly description: "The city where event takes place. This field is optional for virtual events.";
                    readonly maxLength: 256;
                    readonly examples: readonly ["Buenos Aires"];
                };
                readonly country: {
                    readonly type: "string";
                    readonly description: "The country where the event takes place. This field is optional for virtual events.";
                    readonly maxLength: 256;
                    readonly examples: readonly ["Argentina"];
                };
                readonly event_url: {
                    readonly type: "string";
                    readonly description: "The URL of a website the attendees should visit.";
                    readonly examples: readonly ["https://poap.xyz"];
                };
                readonly image_url: {
                    readonly type: "string";
                    readonly description: "This provides the URL of the POAP image.\nTo request a smaller, lower resolution version of the image, simply append \"?size=small\" to the end of the URL. For example, \"https://poap.xyz/image.png?size=small\".";
                    readonly examples: readonly ["https://poap.xyz/image.png"];
                };
                readonly animation_url: {
                    readonly type: "string";
                    readonly description: "The URL of the POAP animation.";
                };
                readonly year: {
                    readonly type: "number";
                    readonly description: "The year the event took place.";
                    readonly examples: readonly [2022];
                };
                readonly start_date: {
                    readonly type: "string";
                    readonly format: "date";
                    readonly description: "The start date of the event. Must be in YYYY-MM-DD or MM-DD-YYYY format.";
                    readonly examples: readonly ["07-18-2022"];
                };
                readonly end_date: {
                    readonly type: "string";
                    readonly format: "date";
                    readonly description: "The end date of the event. Must be in YYYY-MM-DD or MM-DD-YYYY format.";
                    readonly examples: readonly ["07-20-2022"];
                };
                readonly expiry_date: {
                    readonly type: "string";
                    readonly format: "date";
                    readonly description: "The limit date for POAPs to be claimable for the event. Must be in YYYY-MM-DD or MM-DD-YYYY format.";
                    readonly examples: readonly ["08-31-2022"];
                };
                readonly from_admin: {
                    readonly type: "boolean";
                    readonly description: "Whether the event was created by a POAP admin.";
                    readonly examples: readonly [true];
                };
                readonly virtual_event: {
                    readonly type: "boolean";
                    readonly description: "Whether the event is virtual.";
                    readonly default: false;
                    readonly examples: readonly [true];
                };
                readonly event_template_id: {
                    readonly type: "number";
                    readonly description: "The ID of the event template for POAP’s claim page (https://app.poap.xyz/claim/xxxxxx).";
                    readonly default: 1;
                    readonly examples: readonly [1];
                };
                readonly private_event: {
                    readonly type: "boolean";
                    readonly description: "If true, the event is private and will be filtered out in POAP’s frontend. Test events should be made private.";
                    readonly default: false;
                    readonly examples: readonly [true];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const POstRedeemRequests: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly event_id: {
                readonly type: "number";
                readonly description: "The numeric ID of the event.";
                readonly examples: readonly [1];
            };
            readonly requested_codes: {
                readonly type: "number";
                readonly minimum: 0;
                readonly maximum: 50000;
                readonly description: "The amount of codes you need.";
                readonly examples: readonly [1];
            };
            readonly secret_code: {
                readonly type: "string";
                readonly pattern: "^[0-9]{6}$";
                readonly description: "A six-digit numeric key defined when the event was created and is used to authorize performing certain actions on an event. Note: It's also call \"Edit Code\"";
                readonly examples: readonly ["234789"];
            };
            readonly notify_issuer: {
                readonly type: "boolean";
                readonly description: "If false, the email with the mint links and the email with the edit code are not send";
                readonly default: true;
                readonly examples: readonly [true];
            };
            readonly redeem_type: {
                readonly type: "string";
                readonly enum: readonly ["qr_code", "secret_website", "secret_word"];
                readonly description: "The type of redeem method requested: qr_code, secret_website, secret_word.";
                readonly examples: readonly ["string"];
            };
        };
        readonly required: readonly ["event_id", "requested_codes", "redeem_type"];
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly description: "The petition ID. This is used to track the request's approval status.";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const POstSecretRequests: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly event_id: {
                readonly type: "number";
                readonly description: "The numeric ID of the event.";
                readonly examples: readonly [1];
            };
            readonly requested_codes: {
                readonly type: "number";
                readonly description: "The number of POAP codes that were requested for this secret.";
                readonly examples: readonly [5];
            };
            readonly secret_code: {
                readonly type: "string";
                readonly pattern: "^[0-9]{6}$";
                readonly description: "A six-digit numeric key defined when the event was created and is used to authorize performing certain actions on an event. Note: It's also call \"Edit Code\"";
                readonly examples: readonly ["234789"];
            };
            readonly claim_name: {
                readonly type: "string";
                readonly description: "The name of the secret claim. This is the `claim_name` entered when creating a Website or Secret Word claim.";
                readonly examples: readonly ["culture-form-firm"];
            };
            readonly from: {
                readonly type: "string";
                readonly description: "The date from which the secret is valid. Must be ISO format YYYY-MM-DDTHH-MM-SSZ.";
                readonly format: "date-time";
                readonly examples: readonly ["2022-07-18T00:01:00.000Z"];
            };
            readonly to: {
                readonly type: "string";
                readonly description: "The date to which the secret is valid. Must be ISO format YYYY-MM-DDTHH-MM-SSZ.";
                readonly format: "date-time";
                readonly examples: readonly ["2022-07-20T00:01:00.000Z"];
            };
            readonly timezone: {
                readonly type: "number";
                readonly description: "The timezone UTC offset for the secret date.";
                readonly default: 0;
                readonly minimum: -12;
                readonly maximum: 12;
                readonly examples: readonly [0];
            };
            readonly active: {
                readonly type: "boolean";
                readonly description: "Whether the secret is active.";
                readonly default: true;
                readonly examples: readonly [true];
            };
            readonly secret_type: {
                readonly type: "string";
                readonly enum: readonly ["word", "website"];
                readonly examples: readonly ["string"];
            };
        };
        readonly required: readonly ["event_id", "requested_codes", "claim_name", "from", "to", "secret_type"];
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "number";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const POstWebsiteClaim: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly website: {
                readonly type: "string";
                readonly description: "The website name or secret word for the POAP claim. This is the `claim_name` entered when creating a Website or Secret Word claim.";
                readonly examples: readonly ["super-lizard-hammer"];
            };
            readonly address: {
                readonly type: "string";
                readonly description: "The address that is claiming the POAP.";
                readonly examples: readonly ["0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045"];
            };
        };
        readonly required: readonly ["website", "address"];
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "number";
                    readonly description: "The numeric ID of the claim.";
                    readonly examples: readonly [13894783];
                };
                readonly qr_hash: {
                    readonly type: "string";
                    readonly maxLength: 6;
                    readonly minLength: 6;
                    readonly description: "A six-digit alphanumeric code used to claim a POAP. For example, in the mint-link https://app.poap.xyz/claim/2abwt1, the `qr_hash` is the code located at the end URL: 2abwt1.";
                    readonly examples: readonly ["2abwt1"];
                };
                readonly tx_hash: {
                    readonly type: "string";
                    readonly description: "The Gnosis Chain transaction hash.";
                    readonly examples: readonly ["0x238b1f8235e7c41e4a4b1bf8e90c9e152d2a772936554090b07865137a39428b"];
                };
                readonly event_id: {
                    readonly type: "number";
                    readonly description: "The numeric ID of the event.";
                    readonly examples: readonly [16947];
                };
                readonly beneficiary: {
                    readonly type: "string";
                    readonly description: "The Etherem address or email the collector claimed with. If ENS was used to claim then this will show the resolved Ethereum address.";
                    readonly examples: readonly ["0xf6b6f07862a02c85628b3a9688beae07fea9c863"];
                };
                readonly user_input: {
                    readonly type: "string";
                    readonly description: "The Ethereum address, ENS, or email the collector claimed with.";
                    readonly examples: readonly ["poap.eth"];
                };
                readonly signer: {
                    readonly type: "string";
                    readonly description: "The POAP-owned address that sent the transaction to mint the POAP.";
                    readonly examples: readonly ["0xc33557d52ed424A5B7014F06e4D98C4Bfc71eF59"];
                };
                readonly claimed: {
                    readonly type: "boolean";
                    readonly description: "Whether the claim code has been used or not.";
                    readonly examples: readonly [true];
                };
                readonly claimed_date: {
                    readonly type: "string";
                    readonly format: "date-time";
                    readonly description: "The datetime when the POAP was claimed.";
                    readonly examples: readonly ["2022-07-12T14:22:45.278Z"];
                };
                readonly created_date: {
                    readonly type: "string";
                    readonly format: "date-time";
                    readonly description: "The datetime when the claim codes were created.";
                    readonly examples: readonly ["2022-07-12T14:22:45.278Z"];
                };
                readonly is_active: {
                    readonly type: "boolean";
                    readonly description: "Whether the claim is active or not.";
                    readonly examples: readonly [true];
                };
                readonly secret: {
                    readonly type: "string";
                    readonly description: "An authentication code that’s unique to each individual mint-link. This code can be retrieved with the GET /actions/claim-qr endpoint.";
                };
                readonly event: {
                    readonly type: "object";
                    readonly properties: {
                        readonly id: {
                            readonly type: "number";
                            readonly description: "The numeric ID of the event.";
                            readonly examples: readonly [16947];
                        };
                        readonly fancy_id: {
                            readonly type: "string";
                            readonly description: "A string that uniquely identifies the event. This is generated based on the event name at event creation and cannot be edited.";
                            readonly maxLength: 256;
                            readonly examples: readonly ["example-event-2022"];
                        };
                        readonly name: {
                            readonly type: "string";
                            readonly description: "The name of the event.";
                            readonly maxLength: 256;
                            readonly examples: readonly ["Example event 2022"];
                        };
                        readonly description: {
                            readonly type: "string";
                            readonly description: "The description of the event. Max length is 1500 characters.";
                            readonly maxLength: 1500;
                            readonly examples: readonly ["This is an example event description"];
                        };
                        readonly city: {
                            readonly type: "string";
                            readonly description: "The city where event takes place. This field is optional for virtual events.";
                            readonly maxLength: 256;
                            readonly examples: readonly ["Buenos Aires"];
                        };
                        readonly country: {
                            readonly type: "string";
                            readonly description: "The country where the event takes place. This field is optional for virtual events.";
                            readonly maxLength: 256;
                            readonly examples: readonly ["Argentina"];
                        };
                        readonly event_url: {
                            readonly type: "string";
                            readonly description: "The URL of a website the attendees should visit.";
                            readonly examples: readonly ["https://poap.xyz"];
                        };
                        readonly image_url: {
                            readonly type: "string";
                            readonly description: "This provides the URL of the POAP image.\nTo request a smaller, lower resolution version of the image, simply append \"?size=small\" to the end of the URL. For example, \"https://poap.xyz/image.png?size=small\".";
                            readonly examples: readonly ["https://poap.xyz/image.png"];
                        };
                        readonly animation_url: {
                            readonly type: "string";
                            readonly description: "The URL of the POAP animation.";
                        };
                        readonly year: {
                            readonly type: "number";
                            readonly description: "The year the event took place.";
                            readonly examples: readonly [2022];
                        };
                        readonly start_date: {
                            readonly type: "string";
                            readonly format: "date";
                            readonly description: "The start date of the event. Must be in YYYY-MM-DD or MM-DD-YYYY format.";
                            readonly examples: readonly ["07-18-2022"];
                        };
                        readonly end_date: {
                            readonly type: "string";
                            readonly format: "date";
                            readonly description: "The end date of the event. Must be in YYYY-MM-DD or MM-DD-YYYY format.";
                            readonly examples: readonly ["07-20-2022"];
                        };
                        readonly expiry_date: {
                            readonly type: "string";
                            readonly format: "date";
                            readonly description: "The limit date for POAPs to be claimable for the event. Must be in YYYY-MM-DD or MM-DD-YYYY format.";
                            readonly examples: readonly ["08-31-2022"];
                        };
                        readonly from_admin: {
                            readonly type: "boolean";
                            readonly description: "Whether the event was created by a POAP admin.";
                            readonly examples: readonly [true];
                        };
                        readonly virtual_event: {
                            readonly type: "boolean";
                            readonly description: "Whether the event is virtual.";
                            readonly default: false;
                            readonly examples: readonly [true];
                        };
                        readonly event_template_id: {
                            readonly type: "number";
                            readonly description: "The ID of the event template for POAP’s claim page (https://app.poap.xyz/claim/xxxxxx).";
                            readonly default: 1;
                            readonly examples: readonly [1];
                        };
                        readonly private_event: {
                            readonly type: "boolean";
                            readonly description: "If true, the event is private and will be filtered out in POAP’s frontend. Test events should be made private.";
                            readonly default: false;
                            readonly examples: readonly [true];
                        };
                    };
                };
                readonly event_template: {
                    readonly type: readonly ["object", "null"];
                    readonly properties: {
                        readonly id: {
                            readonly type: "number";
                        };
                        readonly name: {
                            readonly type: "string";
                        };
                        readonly title_image: {
                            readonly type: "string";
                        };
                        readonly title_link: {
                            readonly type: "string";
                        };
                        readonly header_link_text: {
                            readonly type: "string";
                        };
                        readonly header_link_url: {
                            readonly type: "string";
                        };
                        readonly header_color: {
                            readonly type: "string";
                        };
                        readonly header_link_color: {
                            readonly type: "string";
                        };
                        readonly main_color: {
                            readonly type: "string";
                        };
                        readonly footer_color: {
                            readonly type: "string";
                        };
                        readonly left_image_url: {
                            readonly type: "string";
                        };
                        readonly left_image_link: {
                            readonly type: "string";
                        };
                        readonly right_image_url: {
                            readonly type: "string";
                        };
                        readonly right_image_link: {
                            readonly type: "string";
                        };
                        readonly mobile_image_url: {
                            readonly type: "string";
                        };
                        readonly mobile_image_link: {
                            readonly type: "string";
                        };
                        readonly footer_icon: {
                            readonly type: "string";
                        };
                        readonly created_date: {
                            readonly type: "string";
                        };
                        readonly is_active: {
                            readonly type: "boolean";
                        };
                    };
                };
                readonly tx_status: {
                    readonly type: "string";
                    readonly description: "That status of the minting transaction: waiting_tx, pending, passed, failed, bumped";
                    readonly examples: readonly ["pending"];
                };
                readonly delegated_mint: {
                    readonly type: "boolean";
                    readonly description: "This is a deprecated property.";
                    readonly examples: readonly [false];
                };
                readonly delegated_signed_message: {
                    readonly type: "string";
                    readonly description: "This is a deprecated property.";
                };
                readonly result: {
                    readonly type: readonly ["object", "null"];
                    readonly properties: {
                        readonly token: {
                            readonly type: "number";
                            readonly description: "The token id.";
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PUtEvents: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly name: {
                readonly type: "string";
                readonly description: "The name of the event.";
                readonly maxLength: 256;
                readonly examples: readonly ["Example event 2022"];
            };
            readonly description: {
                readonly type: "string";
                readonly description: "The description of the event. Max length is 1500 characters.";
                readonly maxLength: 1500;
                readonly examples: readonly ["This is an example event description"];
            };
            readonly country: {
                readonly type: "string";
                readonly description: "The country where the event takes place. This field is optional for virtual events.";
                readonly maxLength: 256;
                readonly examples: readonly ["Argentina"];
            };
            readonly city: {
                readonly type: "string";
                readonly description: "The city where event takes place. This field is optional for virtual events.";
                readonly maxLength: 256;
                readonly examples: readonly ["Buenos Aires"];
            };
            readonly start_date: {
                readonly type: "string";
                readonly format: "date";
                readonly description: "The start date of the event. Must be in YYYY-MM-DD or MM-DD-YYYY format.";
                readonly examples: readonly ["07-18-2022"];
            };
            readonly end_date: {
                readonly type: "string";
                readonly format: "date";
                readonly description: "The end date of the event. Must be in YYYY-MM-DD or MM-DD-YYYY format.";
                readonly examples: readonly ["07-20-2022"];
            };
            readonly expiry_date: {
                readonly type: "string";
                readonly format: "date";
                readonly description: "The limit date for POAPs to be claimable for the event. Must be in YYYY-MM-DD or MM-DD-YYYY format.";
                readonly examples: readonly ["08-31-2022"];
            };
            readonly event_url: {
                readonly type: "string";
                readonly description: "The URL of a website the attendees should visit.";
                readonly examples: readonly ["https://poap.xyz"];
            };
            readonly virtual_event: {
                readonly type: "boolean";
                readonly description: "Whether the event is virtual.";
                readonly default: false;
                readonly examples: readonly [true];
            };
            readonly private_event: {
                readonly type: "boolean";
                readonly description: "If true, the event is private and will be filtered out in POAP’s frontend. Test events should be made private.";
                readonly default: false;
                readonly examples: readonly [true];
            };
            readonly event_template_id: {
                readonly type: "number";
                readonly description: "The ID of the event template for POAP’s claim page (https://app.poap.xyz/claim/xxxxxx).";
                readonly default: 1;
                readonly examples: readonly [1];
            };
            readonly secret_code: {
                readonly type: "string";
                readonly pattern: "^[0-9]{6}$";
                readonly description: "A six-digit numeric key defined when the event was created and is used to authorize performing certain actions on an event. Note: It's also call \"Edit Code\"";
                readonly examples: readonly ["234789"];
            };
        };
        readonly required: readonly ["name", "description", "city", "country", "start_date", "end_date", "expiry_date", "event_url", "image", "secret_code"];
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly fancyId: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "A string that uniquely identifies the event. This is generated based on the event name at event creation and cannot be edited.";
                };
            };
            readonly required: readonly ["fancyId"];
        }];
    };
    readonly response: {
        readonly "204": {
            readonly type: "string";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PUtSecretRequests: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly event_id: {
                readonly type: "number";
                readonly description: "The numeric ID of the event.";
                readonly examples: readonly [1];
            };
            readonly secret_code: {
                readonly type: "string";
                readonly pattern: "^[0-9]{6}$";
                readonly description: "A six-digit numeric key defined when the event was created and is used to authorize performing certain actions on an event. Note: It's also call \"Edit Code\"";
                readonly examples: readonly ["234789"];
            };
            readonly claim_name: {
                readonly type: "string";
                readonly description: "The name of the secret claim. This is the `claim_name` entered when creating a Website or Secret Word claim.";
                readonly examples: readonly ["culture-form-firm"];
            };
            readonly from: {
                readonly type: "string";
                readonly description: "The date from which the secret is valid. Must be ISO format YYYY-MM-DDTHH-MM-SSZ.";
                readonly format: "date-time";
                readonly examples: readonly ["2022-07-18T00:01:00.000Z"];
            };
            readonly to: {
                readonly type: "string";
                readonly description: "The date to which the secret is valid. Must be ISO format YYYY-MM-DDTHH-MM-SSZ.";
                readonly format: "date-time";
                readonly examples: readonly ["2022-07-20T00:01:00.000Z"];
            };
            readonly timezone: {
                readonly type: "number";
                readonly description: "The timezone UTC offset for the secret date.";
                readonly default: 0;
                readonly minimum: -12;
                readonly maximum: 12;
                readonly examples: readonly [0];
            };
            readonly active: {
                readonly type: "boolean";
                readonly description: "Whether the secret is active.";
                readonly default: true;
                readonly examples: readonly [true];
            };
            readonly secret_type: {
                readonly type: "string";
                readonly enum: readonly ["word", "website"];
                readonly examples: readonly ["string"];
            };
            readonly accepted_redeems: {
                readonly type: "number";
                readonly description: "The number of POAPs that were accepted to be claimed using this secret.";
                readonly examples: readonly [5];
            };
        };
        readonly required: readonly ["event_id", "claim_name", "from", "to", "active", "secret_type"];
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "number";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
export { GEtActionsClaimQr, GEtActionsScan, GEtDeliveries, GEtDelivery, GEtDeliveryAddresses, GEtDeliveryAddressesAddress, GEtDeliverySlug, GEtEventPoaps, GEtEvents, GEtEventsId, GEtHealthCheck, GEtMetadata, GEtPaginatedEvents, GEtRedeemRequestsActiveCount, GEtSecret, GEtToken, GEtTokenImage, GEtTransactionRequests, POstActionsClaimDeliveryV2, POstActionsClaimQr, POstDeliveries, POstEventQrCodes, POstEventValidate, POstEvents, POstRedeemRequests, POstSecretRequests, POstWebsiteClaim, PUtEvents, PUtSecretRequests };
