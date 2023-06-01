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
    
    const customStyles = {
        control: (provided) => ({
          ...provided,
          width: '80%', // Set the desired width of the select control
          border: '1px solid #ccc', 
          borderRadius: '4px', 
        }),
      };
    
      return (
        <div>
          <Select options={categorychoice} styles={customStyles} />
        </div>
      );
    }
    
export default ChooseCategory;