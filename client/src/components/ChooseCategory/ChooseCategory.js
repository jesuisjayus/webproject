import React,{useState} from 'react'
import Select from 'react-select'

function ChooseCategory()
{
  const [selectedCategory, setSelectedCategory] = useState("");

  const categoryChange =(selectedOption) =>{
    setSelectedCategory(selectedOption);
  };
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
          <select options={categorychoice} styles={customStyles} onChange={categoryChange} value={selectedCategory}>Choix de la catégorie</select>
        </div>
      );
    }
    
export default ChooseCategory;