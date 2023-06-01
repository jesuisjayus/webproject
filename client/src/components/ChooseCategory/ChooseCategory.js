import React from 'react'
import Select from 'react-select'

function ChooseCategory()
{
    var categorychoice =[

        {
             value: 1,
             label: "Guitars"

        },
        {
             value: 2,
             label: "Kitchen"

       },
       {
             value: 3,
             label: "Music"

        },
        {
             value: 4,
             label: "Sports"

        }
    ];
    return(
        <div>
            <Select options={categorychoice}/>
            
        </div>
    );
}

export default ChooseCategory;