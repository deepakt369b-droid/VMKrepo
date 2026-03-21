export type ContactSettings = {
    /**
     * WhatsApp number in international format (can include '+' and spaces).
     * Example: +971500000000
     */
    whatsappNumber: string;
    /**
     * Default WhatsApp message template used by site widgets (optional).
     */
    whatsappTemplate: string;
};

export const CONTACT_SETTINGS: ContactSettings = {
    "whatsappNumber": "+971544887712",
    "whatsappTemplate": "Hi VMK Construction, I would like to enquire about your services."
};
