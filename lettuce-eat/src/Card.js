function Card(props) {

    return ( 
        <div className="bg-white border overflow-hidden border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 w-60 m-6 grid">
            <a href="/">
                <img className="rounded-t-lg overflow-hidden" src={props.img} alt=""/>
            </a>
            <div className="p-5">
                <a href="/">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{props.item}</h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{props.desc}</p>
               <div className="m-1">
               <select className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 m-1">
                    {Array.from(Array(6), (e,i)=>{
                        return(
                            <option key={i+1} value={i+1}> {i+1}</option>
                            )
                    })}
                </select>
                <select className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 m-1">
                    <option value="half">Half</option>
                    <option value="full">Full</option>
                </select>
               </div>
               <p className="mb-3 font-bold text-white dark:text-white">{props.price}</p>
            </div>
            <button className="w-full text-white bg-[#457b9d] hover:bg-[#457b8a] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add To Cart</button>
        </div>
         );
}

export default Card;