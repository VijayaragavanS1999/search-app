const data = {
  cardData: [
    {
      id: 1,
      name: "Levi's",
      url: "http://levis.com/",
      companyId: 3,
      primaryText:
        "The world’s leading CRM is ready to help you simplify the business part of your small business.",
      headLine: "Salesforce for Small Business",
      description: "",
      input: "Sign Up",
      img: "https://scontent-lax3-1.xx.fbcdn.net/v/t39.35426-6/272836524_2153961231425063_357450253016481676_n.jpg?stp=dst-jpg_s600x600&_nc_cat=104&ccb=1-7&_nc_sid=cf96c8&_nc_ohc=L2Nkkg2Lb7AAX8MFWMk&_nc_ht=scontent-lax3-1.xx&oh=00_AT-m5FwsdNtjj4Eg_tpLTCYnXD2agiVZIYmPNukPVcQpgg&oe=62FF1CFB",
    },
    {
      id: 2,
      name: "Puma",
      url: "http://puma.com/",
      companyId: 1,
      primaryText: "We like where you are going with this",
      headLine: "Relaxed Fit Men's Jeans",
      description: "",
      input: "Shop Now",
      img: "https://scontent-lax3-2.xx.fbcdn.net/v/t39.35426-6/297056300_1098850614360880_7719182279313061464_n.jpg?stp=dst-jpg_s600x600&_nc_cat=103&ccb=1-7&_nc_sid=cf96c8&_nc_ohc=y0IRCnVjgnAAX8Vz5rJ&_nc_ht=scontent-lax3-2.xx&oh=00_AT-6MIPQ__gu4AosQBPinBW71pjMZHjJ14d7X2xhty19mw&oe=63007FD1",
    },
    {
      id: 3,
      name: "Salesforce",
      url: "http://salesforce.com/",
      companyId: 6,
      primaryText:
        "Teva x Cotopaxi is back! Celebrate eternal summer with limited-edition Teva x Cotopaxi Original Universal sandals in bold new colors.",
      headLine: "Made With Recycled Plastic",
      description: "Shop Back to School",
      input: "Shop Now",
      img: "https://scontent-lax3-1.xx.fbcdn.net/v/t39.35426-6/296247001_392403992997238_7327211414597606199_n.jpg?stp=dst-jpg_s600x600&_nc_cat=104&ccb=1-7&_nc_sid=cf96c8&_nc_ohc=QlN1G9nM7nYAX-JunVb&_nc_ht=scontent-lax3-1.xx&oh=00_AT-fENwnbjJAngpV9vMy-HaoKzbn5XsxIoM4d9tQDDPWEA&oe=62FF50DC",
    },
    {
      id: 4,
      name: "Adidas",
      url: "http://adidas.com/",
      companyId: 7,
      primaryText:
        "The Emmy-nominated Netflix comedy special from the late Norm Macdonald is his last gift to the world of comedy he helped shape.",
      headLine:
        "Norm Macdonald's Nothing Special gives one last dose of the late comic",
      description: "",
      input: "Lern More",
      img: "https://scontent-lax3-1.xx.fbcdn.net/v/t39.35426-6/296023475_332375312347388_3924863146678994082_n.jpg?stp=dst-jpg_s600x600&_nc_cat=102&ccb=1-7&_nc_sid=cf96c8&_nc_ohc=KYQlzunjx9MAX-YBZfp&_nc_ht=scontent-lax3-1.xx&oh=00_AT-TONymC6eNnIvMeRq2A-Odqw0Dk7pBIKqQ13EsIKa7LA&oe=62FF3566",
    },
    {
      id: 5,
      name: "Nike",
      url: "http://nike.com/",
      companyId: 9,
      primaryText:
        "Visit Valentino.com, discover the new products and shop now!",
      headLine: "Valentino Hexagonal Metal Frame With Crystal Studs",
      description: "",
      input: "Shop Now",
      img: "https://scontent-lax3-1.xx.fbcdn.net/v/t39.35426-6/296023475_332375312347388_3924863146678994082_n.jpg?stp=dst-jpg_s600x600&_nc_cat=102&ccb=1-7&_nc_sid=cf96c8&_nc_ohc=KYQlzunjx9MAX-YBZfp&_nc_ht=scontent-lax3-1.xx&oh=00_AT-TONymC6eNnIvMeRq2A-Odqw0Dk7pBIKqQ13EsIKa7LA&oe=62FF3566",
    },
    {
      id: 6,
      name: "Cotopaxi",
      url: "http://cotopaxi.com/",
      companyId: 11,
      primaryText:
        "Say ‘goodnight’ to sleeping hot 🔥 with Purple products—designed to dissipate heat.",
      headLine: "Cooler Summers Start Here",
      description: "Shop Purple products, designed to help you sleep cool.",
      input: "Shop Now",
      img: "https://scontent-lax3-1.xx.fbcdn.net/v/t39.35426-6/295952890_1671560623216826_2304515553891168883_n.jpg?stp=dst-jpg_s600x600&_nc_cat=110&ccb=1-7&_nc_sid=cf96c8&_nc_ohc=cxCpVQU4KEoAX8ZeADM&_nc_ht=scontent-lax3-1.xx&oh=00_AT_yqHN6f4Xpwz5Vawp6yDUXbi_M6yVJBpsXe6jXoPnoCw&oe=62FFD379",
    },
    {
      id: 7,
      name: "Netflix",
      url: "http://netflix.com/",
      companyId: 10,
      primaryText:
        "Dark spots. Breakouts. Rosacea. Dull skin. Fine lines. Our formulas are custom-mixed for YOUR skin concerns.",
      headLine: "Personalized skincare for dark spots, acne, and more.",
      description:
        "Personalized skincare for dark spots, acne, and more. Results may vary.",
      input: "Order Now",
      img: "https://scontent-lax3-1.xx.fbcdn.net/v/t39.35426-6/298835616_563732085536335_7113503346690249142_n.jpg?stp=dst-jpg_s600x600&_nc_cat=108&ccb=1-7&_nc_sid=cf96c8&_nc_ohc=nXsMZPD0JTQAX_r8Gfw&_nc_ht=scontent-lax3-1.xx&oh=00_AT_bJ5VcASg2TI_omgXNjXAvNKWCQiT6fBff7IJscF4mdg&oe=62FFF7AF",
    },
  ],
};
export default data;
