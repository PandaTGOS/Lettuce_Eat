import Navbar from "../Navbar";
import Card from "../Card";

function Home() {
    return ( 
        <div className="bg-center bg-fixed bg-no-repeat bg-[url('https://awol.com.au/wp-content/uploads/2020/06/discount-food-app-lead.jpg')] pt-20">
            <div><Navbar/></div>
            <div className="flex flex-wrap content-around justify-center" >
                <Card img="https://c.ndtvimg.com/2022-06/gp4k2jro_burgers_625x300_20_June_22.jpg?im=FeatureCrop,algorithm=dnn,width=620,height=350?im=FaceCrop,algorithm=dnn,width=1200,height=886" item="Veg Burger" desc="A delicious burger with fresh buns, crispy patty and assorted veggies, made with love" price="$75"/>

                <Card img="https://www.thespruceeats.com/thmb/S3VnVqIAAFg5pM6auqvP9ynkNLw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/creamy-tomato-pasta-481963-hero-01-da2897ca4ccd4673849c017642e6d827.jpg" item="Pasta" desc="A delicious burger with fresh buns, crispy patty and assorted veggies, made with love" price="$75"/>

                <Card img="https://imgstaticcontent.lbb.in/lbbnew/wp-content/uploads/sites/2/2018/03/09212138/1131-1.jpg" item="Pizza" desc="A delicious burger with fresh buns, crispy patty and assorted veggies, made with love" price="$75"/>

                <Card img="https://www.thespruceeats.com/thmb/X_JGM04VusvkuGqTVan4QmBRqjI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/how-to-make-homemade-french-fries-2215971-hero-01-02f62a016f3e4aa4b41d0c27539885c3.jpg" item="French Fries" desc="A delicious burger with fresh buns, crispy patty and assorted veggies, made with love" price="$75"/>

                <Card img="https://myfoodstory.com/wp-content/uploads/2021/08/Punjabi-Samosa-4.jpg" item="Samosa" desc="A delicious burger with fresh buns, crispy patty and assorted veggies, made with love" price="$75"/>

                <Card img="https://hattyfoods.com/wp-content/uploads/2021/04/Restaurant-style-fish-fry-recipe1.jpg" item="Fish Fry" desc="A delicious burger with fresh buns, crispy patty and assorted veggies, made with love" price="$75"/>

                <Card img="https://static.onecms.io/wp-content/uploads/sites/43/2022/02/16/21014-Good-old-Fashioned-Pancakes-mfs_001.jpg" item="Pancakes" desc="A delicious burger with fresh buns, crispy patty and assorted veggies, made with love" price="$75"/>

                <Card img="https://cdn.britannica.com/52/128652-050-14AD19CA/Maki-zushi.jpg" item="Sushi" desc="A delicious burger with fresh buns, crispy patty and assorted veggies, made with love" price="$75"/>
                
            </div>
        </div>

        );
}

export default Home;