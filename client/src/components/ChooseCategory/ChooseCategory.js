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
             label: "Cooking"

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

    const customStyles = {
        control: (provided) => ({
          ...provided,
          width: '100%', // Set the desired width of the select control 
          borderRadius: '40px', 
        }),
      };
    
      return (
        <div>
          <Select options={categorychoice} styles={customStyles} />
        </div>
      );
    }
    
export default ChooseCategory;