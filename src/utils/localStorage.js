const setReadData = (bookId) => {

    const readData = getReadData();
    const doesExist= readData.find(data=> data === bookId);
    if(!doesExist){
        readData.push(bookId);
        localStorage.setItem('read',JSON.stringify(readData));
    }

}

const getReadData = ()=> {

    const readData = localStorage.getItem('read')
    if(readData) return JSON.parse(readData)
    else return []; 

}

const setWishlistData = (bookId) => {

    const wishlistData = getWishlistData();
    const doesExist = wishlistData.find(data => data===bookId);
    if(!doesExist){
        wishlistData.push(bookId);
        localStorage.setItem('wishlist', JSON.stringify(wishlistData))
    }

}

const getWishlistData = ()=> {

    const wishlistData = localStorage.getItem('wishlist');
    if(wishlistData) return JSON.parse(wishlistData);
    else return []

}

const removeFromWishlist = (bookId) => {

    const wishlistData = getWishlistData();
    const newData = wishlistData.filter(data=> data!=bookId);
    localStorage.setItem('wishlist', JSON.stringify(newData));

    
}

export  {setReadData, getReadData, getWishlistData, setWishlistData,removeFromWishlist};