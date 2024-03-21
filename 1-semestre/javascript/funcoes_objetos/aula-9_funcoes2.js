const shoppinCart = [];

function addItemToCart (item){
    shoppinCart.push(item)
}

function removeItemFromCart(item){
    const index = shoppinCart.indexOf(item)
    if(index !== -1){
        shoppinCart.splice(index,1)
    }
}

function viewCart(){
    if(shoppinCart.length ==0){
        console.log("seu carrinho esta vazio")
    }else{
        console.log("itens estao no seu carrinho")
        for(let i = 0; i< shoppinCart.length ; i++){
         console.log(`${i+1} - ${shoppinCart[i]}`)
        }
    }
}

function clearCart(){
    shoppinCart.length =0;
    console.log("seu carrinho foi apagado")
}

addItemToCart("tenis")
addItemToCart("blusa")
addItemToCart("calça")

viewCart()

removeItemFromCart("blusa")

viewCart()

clearCart()

viewCart()


