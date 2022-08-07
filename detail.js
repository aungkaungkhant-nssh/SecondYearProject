let products = [
    {
        category:"whiskey",
        name:"Diplomatico",
        price:13,
        alcohol:40,
        country:"Venezuela, Bolivarian",
        image:"images/diplomatico.jpeg",
        description:'Very chocolatey initially, like a chocolate sauce on dessert. Rich and full, bursting with the sweet toffee, fudge and tropical fruit flavours from the nose. The texture is very generous, rounded by the oak.'
    },
    {
        category:"whiskey",
        name:"Bacardi",
        price:14.99,
        alcohol:37.7,
        country:"Santiago de Cuba",
        image:"images/brandbacardi.jpeg",
        description:"BACARDÍ Superior Rum is a light and aromatically balanced rum. Subtle notes of almonds and lime are complemented by hints of vanilla. The finish is dry, crisp, and clean."
    },
    {
        category:"whiskey",
        name:"Barcelo",
        price:64.99,
        alcohol:40.0,
        country:"Dominican Republic",
        image:"images/barcelo.jpeg",
        description:"consists of a blend of rums 8 to 10 years old. The color is mahogany, with golden streaks. On the nose, it is very fruity, with notes of brown sugar and sweet caramel, along with dried cherry, vanilla and some cinnamon."
    },
    {
        category:"whiskey",
        name:"Sailor-Jerry",
        price:18.99,
        alcohol:40.0,
        country:"United States",
        image:"images/SailorJerry.jpeg",
        description:"was developed after loads of historical research into maritime rums. The all-natural spices and flavors we chose give our rum a rich, smooth taste characterized by top notes of vanilla and cinnamon."
    },
    {
        category:"beer",
        name:"Heineken",
        price:2.53,
        alcohol:5,
        country:"Amsterdam",
        image:"images/heineken.jpeg",
        description:"a super-inoffensive lager with a stronger, bitterer taste than most internationally mass-produced lagers. It's perfectly carbonated, pours a straw yellow colour, with little or no head to speak of. It goes down smoothly when it's ice cold."
    },
    {
        category:"beer",
        name:"Tiger",
        price:1.08,
        alcohol:5,
        country:"Singpore",
        image:"images/tiger.jpeg",
        description:"refreshing and full bodied lager beer with a light straw colour, soft beady aroma and a hint of tropical fruit. Its malty character is immediately noticeable, with a silky texture on the palate and has a clean, crisp finish when served chilled. As its name suggests, Tiger packs a real bite."
    },
    {
        category:"beer",
        name:"Corona-Extra",
        price:2.5,
        alcohol:4.6,
        country:"Mexico",
        image:"images/corona.jpeg",
        description:"a light and crisp pale Mexican lager that's wildly popular in the U.S. Its flavor profile is not overly complex, with sweet notes and a bit of hoppy skunkiness on the palate that places it squarely between mass-produced light American lagers and heavier, more complex beer from Europe."
    },
    {
        category:"beer",
        name:"Blue Moon",
        price:3.5,
        alcohol:5.6,
        country:"Denver",
        image:"images/bluemoon.jpeg",
        description:"is a Belgian style wheat ale. Crisp and tangy with a subtle citrus sweetness, this wheat beer has a 5.4% ABV. Full of zesty orange fruitiness, this citrus beer has a creamy body and a light spicy wheat aroma."
    },
    {
        category:"champagne",
        name:"Moet-&-Chandon",
        price:2.5,
        alcohol:12,
        country:"France",
        image:"images/chando.jpeg",
        description:"is a Belgian style wheat ale. Crisp and tangy with a subtle citrus sweetness, this wheat beer has a 5.4% ABV. Full of zesty orange fruitiness, this citrus beer has a creamy body and a light spicy wheat aroma."
    },
    {
        category:"champagne",
        name:"Laurent-perrier",
        price:3.5,
        alcohol:12,
        country:"France",
        image:"images/laurent.jpeg",
        description:"a blend of 50% Chardonnay, 35% Pinot Noir and 15% Meunier, and is based on 2009 plus 15-30% reserve wines from two or three vintages. Citrus colored, this signature LP has a refined, fresh and elegant nose with brioche and delicate citrus flavors."
    },
    {
        category:"champagne",
        name:"Bollinger",
        price:12,
        alcohol:12,
        country:"Nother France",
        image:"images/bollinger.jpeg",
        description:"A golden color, distinctive of black grape varieties. Very fine bubbles. On the nose, it has a beautiful aromatic complexity, ripe fruit, and spicy aromas, with hints of roasted apples, apple compote, and peaches. On the palate, there is a subtle combination of structure, length, and vivacity."
    },
    {
        category:"champagne",
        name:"D​om-Pérignon",
        price:20,
        alcohol:13,
        country:"Nother France",
        image:"images/dom.jpeg",
        description:"a blend of Chardonnay and Pinot Noir. In its youth, it is smooth, creamy and balanced with lots of fruit. With time, it develops toasty mushroomy aromas and layers of complexity. It really is an impressive Champagne."
    },
    {
        category:"champagne",
        name:"Taittinger",
        price:12,
        alcohol:13,
        country:"France",
        image:"images/tra.jpeg",
        description:"renowned for its golden yellow colour with a consistent, fine, lingering mousse. The nose is light and delicate with hints of fruits and brioche. The palate is lean, but has considerable depth and elegance with a long fresh finish."
    },
    {
        category:"wine",
        name:"Cabernet",
        price:10,
        alcohol:13.5,
        country:"France",
        image:"images/carbernet.jpeg",
        description:"renowned for its golden yellow colour with a consistent, fine, lingering mousse. The nose is light and delicate with hints of fruits and brioche. The palate is lean, but has considerable depth and elegance with a long fresh finish."
    },
]

let name = window.location.search.split("=")[1];

let detailProduct = products.find((p)=>p.name === name);

document.querySelector('.detail').innerHTML=`
<div class="card">
<div class="d-flex align-items-top justify-content-between" style="padding: 2rem;">
    <div style="margin-right: 1.4rem;">
          <img src=${detailProduct.image} alt="" style="width:200px;height: 230px;border-radius:10px;">
    </div>
    <div>
        <div style="width: 80%;">
            <div style="margin-bottom: 1rem;">
                <span style="font-weight: bolder;">Name - </span>
                <span style="color: #ada5a5;font-weight: normal;">${detailProduct.name}</span>
            </div>
            <div style="margin-bottom: 1rem;">
                <span  style="font-weight: bolder;">Price - </span>
                <span style="color: #ada5a5;font-weight: normal;">${detailProduct.price}$</span>
            </div>
            <div style="margin-bottom: 1rem;">
                <span  style="font-weight: bolder;">Alcohol - </span>
                <span style="color: #ada5a5 ;font-weight: normal;">${detailProduct.alcohol} %</span>
            </div>
            <div style="margin-bottom: 1rem;">
                <span style="font-weight: bolder;">Country - </span>
                <span style="color: #ada5a5 ;font-weight: normal;">${detailProduct.country}</span>
            </div>
            <div>
                <span style="font-weight: bolder;">Description - </span>
                <span style="color: #ada5a5 ;font-weight: normal;">
                    ${detailProduct.description}
                </span>
            </div>
        </div>
     
    </div>
  
</div>
<button class="btn btn-block mt-2 btn-primary">
    <i class="fa-solid fa-cart-arrow-down" style="margin-right: 5px;"></i>
    Add To Cart
</button>
</div>

`