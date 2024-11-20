function RenderList(props){
    
        // const fruits = [{name: 'Apple', calories: 97}, 
        //         {name: 'Banana', calories: 98},
        //         {name: 'Cherry', calories:90},
        //         {name: 'Mango', calories:109}, 
        //         {name: 'Pineapple', calories: 119}];

        //sorting of the list by name
        //Accending
        // fruits.sort((a,b) => a.name.localeCompare(b.name));
        // Deccending
        // fruits.sort((a,b) => b.name.localeCompare(a.name));

        // sorting of list by calories 
        // fruits.sort((a,b) => a.calories - b.calories); 
        // fruits.sort((a,b) => b.calories - a.calories); // Reverse Order


        // Using Props for reusing the list

        const itemslist = props.items;
        const category = props.category;

        const listItems = itemslist.map((item,index) => <li key={index}>{item.name}: &nbsp;
                                                                        {item.calories}</li>);

        return( <>
                <h3>{category}</h3>
                <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>{listItems}</ul>
                </>
                );
}

RenderList.defaultProps = {
        category : "Category",
        items : [],
}

export default RenderList;


// App.jsx code
// const fruits = [{name: 'Apple', calories: 97}, 
//         {name: 'Banana', calories: 98},
//         {name: 'Cherry', calories:90},
//         {name: 'Mango', calories:109}, 
//         {name: 'Pineapple', calories: 119}];

// const vegies = [{name: 'Aaloo', calories: 150}, 
//         {name: 'Tamatar', calories: 102},
//         {name: 'Bhindi', calories:78},
//         {name: 'Gajjar', calories:98}, 
//         {name: 'Gobhi', calories: 119}];


// return(
// <>
// {fruits.length> 0 && <RenderList items = {fruits} category = "You are in Fruits Segment"/>}
// {vegies.length> 0 && <RenderList items = {vegies} category = "You are in Vegies Segment"/>}


// </>
// )