import {request} from 'graphql-request'

const query = `

{
    allHotels{
        name
    }
}

`;

function getAllHotels(){
    return request('/graphql',query)
            .then(
                data => console.warn('DATA',data) 
            )
};


export {getAllHotels};