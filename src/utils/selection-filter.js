import React from 'react'

export default function selectionFilter({series, films}) {
  return {
    series : [
        {title: 'Documentaties', 
         data: series.filter((item) => item.genre === 'documentaries' )
        },
        {title: 'Comedies', 
         data: series.filter((item) => item.genre === 'comedies' )
        },
        {title: 'Children', 
         data: series.filter((item) => item.genre === 'children' )
        },
        {title: 'Crime', 
         data: series.filter((item) => item.genre === 'crime' )
        },
        {title: 'Feel good', 
         data: series.filter((item) => item.genre === 'feel-good' )
        },

    ],
    films: [
        {title: 'Drama', 
         data: films.filter((item) => item.genre === 'drama' )
        },
        {title: 'Thriller', 
         data: films.filter((item) => item.genre === 'thriller' )
        },
        {title: 'Children', 
         data: films.filter((item) => item.genre === 'children' )
        },
        {title: 'Drama', 
         data: films.filter((item) => item.genre === 'drama' )
        },
        {title: 'Suspense', 
         data: films.filter((item) => item.genre === 'suspense' )
        },
        {title: 'Romace', 
         data: films.filter((item) => item.genre === 'romance' )
        },
        
    ]
  }
}
