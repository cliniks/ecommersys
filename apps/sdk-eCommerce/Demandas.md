<!-- // ENTIDADES PRINCIPAIS
// CART
// USER
// SELLER
// ADMIN
// ORDER
// CHECKOUT
// CATEFORIES
// COUPONS
// AVALIATIONS
// SETTINGS

//TODO HASH DE LOG PARA AUDITORIA
//{
//  type:'tipo de requisição |||'
//}

// GLOBALS //

// USER //
// - Metodos Primários
// . auth(username,password)
// . getMyUser()
// . updateUserInfo()
// . updateImage()
// - products (user.products._) ##
// . GET - getSingle(productId) // registro preferencias usuario \*\*\*\*
// . PATCH - likeProduct(productId)
// . PATCH - reviewProduct(productId,{message: string, start: number (0~5) })
// - Cart (user.cart._) ##
// . GET - getMyCart()
// . PATCH - insertProduct(ProductId)
// . PATCH - removeProduct(ProductId)
// . PATCH - insertCoupon(CouponId)
// . PATCH - removeCoupon(CouponId)
// . PATCH - insertAddress(AddressId)
// . PATCH - removeAddress(AddressId)
// . PATCH - clearMyCart()
// . GET - validateCoupon(CouponId)
// - Orders (user.orders._) ##
// . GET - orderSingle(orderId)
// . PATCH - updateOpenOrderItem(orderId,OrderItemObj)
// . PATCH - updateOpenOrderAddress(orderId,Address)
// . PATCH - cancelOpenOrder(orderId)
// . PATCH - addOpenOrderItem(orderId,OrderItemObj)
// - Checkout (user.checkout._) ## Conversação com o Asaas
// . GET - checkout(checkoutId)
// . POST - generate(OrderData)
// . POST - createPayment(type,value,orderId)
// . PATCH - updatePayment(OrderData)
// . PATCH - cancelCheckout(checkoutId)
// - Metodos Dashboard User (user.dashboard) ##
// . myDashboardInfos()
// - Orders (user.dashboard.orders.\*) ##
// . GET - myOrders(size:number, page:number) //Listagem de categorias
// . GET - orderSingle(orderId)
// . PATCH - updateAddressOpenOrder(orderId,Address)

// SELLER //
// - Metodos Primários
// -
// - Metodos Dashboard Seller (selller.dashboard) ##
// . myDashboardInfos()
// - Products (selller.dashboard.products._) ##
// . GET - myProducts(size:number, page:number,option:{active?:boolean}) //Listagem de produtos \***\* ObjectRequest = { \_id, name, price, buyed, qnt, orders, categories }
// . GET - productSingle(id) \*\*** ObjectRequest = { \_id, name, price, buyed,avaliations(request avaliation tables), qnt, orders, categories }
// . PATCH - updateProduct(id:string,data:Partial<ProductEntitie>)
// . POST - createProduct(data:ProductEntitie)
// . POST - addProductImage(id:string,data:FormData<imgs[]>) \*\* TODO multiImages
// . PATCH - deleteProductImage(ids:string[] | string)
// - Cupoms (selller.dashboard.coupons._) ##
// . GET - myCoupons(size:number, page:number) //Listagem de coupons
// . GET - couponSingle(id)
// . POST - createCoupon(data:couponEntitie)
// . PATCH - updateCoupon(id:string,data:Partial<ProductEntitie>)
// . PATCH - inativeCoupon(id:string)
// - Categories (selller.dashboard.categories._) ##
// . myCategories(size:number, page:number) //Listagem de categorias
// . createCategory(data:couponEntitie)
// . categorySingle(id) //Listagem de produtos
// . updateCategory(id:string,data:Partial<ProductEntitie>)
// - Orders (selller.dashboard.orders._) ##
// . GET - myOrders(size:number, page:number) //Listagem de categorias
// . GET - orderSingle(orderId)
// . PATCH - cancelOpenOrder(orderId)
// . PATCH - addorRemoveCoupon(orderId,couponId) \*\* Only
// . PATCH - updateOpenOrderItem(orderId,OrderItemObj)
// . PATCH - addOpenOrderItem(orderId,OrderItemObj)

// Admin //
// Auditoria do seller >>
// . vizualização das solicições
// . criação de seller -->

```
User:{
// account:{
// auth: () => // metodo de autenticação,
// createNewUser: (data:Formdata) => // metodo de criação de novo usuário
// sendEmailToken: (data:{email:string}) => // metodo de envio de email Two factor auth
// sendEmailToken: (data:{email:string,code:number}) => // metodo de confirmação de token Two factor auth
// getMyUser: () => // metodo de requisição de usuário
// updateUserInfo: (id:string,data:Partial<UserInfo>) => // metodo atualização de UserInfo
// updateUserImage: (id:string,img:ImageObj) => // metodo de atualização de imagem de usuário
// },
dashboard:{
  dashBoardInfo:()=> // metodo de requisição de info da página inicial de dashboard
},
//product:{
// getProduct:(id)=> // metodo de requisição de produto e inserção de dados para augoritimo de visibilidade
//},
//cart:{
// getMyCart:() => // metodo de requisição carrinho
// insertProduct:({ productId: string,amount: string}) => // metodo inserção e incremento de produto no carrinho
// removeProduct:({ productId: string,amount: string}) => // metodo decremento e exclusão de produto no carrinho
// insertCoupon:(CouponId) => // metodo inserção de cupom no carrinho
// removeCoupon:(CouponId) => // metodo remoção de cupom no carrinho
// insertAddress:(AddressId) => // metodo inserção de endereço no carrinho
// removeAddress:(AddressId) => // metodo remoção de endereço no carrinho
// clearMyCart:() => // metodo de remoção total de produto e cupom no carrinho
//},
order:{
  getSingle:(orderId) => // metodo de requisição de ordem de serviço
  addOpenOrderItem:(orderId,OrderItemObj) => // metodo de adição de item em ordem de serviço
  removeOpenOrderItem:(orderId,itemId) => // metodo de remoção de item ordem de serviço
  updateOpenOrderItem:(orderId,itemId,OrderItemObj) => // metodo de atualização de item em ordem de serviço
  updateOpenOrderAddress:(orderId,Address) => // metodo de atualização de endereço de entrega em ordem de serviço
  cancelOpenOrder:(orderId) => // metodo de cancelamento de ordem de serviço em aberto
}
// checkout:{
//  getSingle(checkoutId) => // metodo de requisição de checkout
//  generate(OrderData) => // metodo de geração de checkout a partir de ordem de serviço
//  createPayment(type,value,checkoutId) => // metodo de criação de forma de pagamento com link
//  updatePayment(OrderData) => // metodo de atualização de pagamento
//  confirmPayment(OrderData) => // metodo de confirmação de status de pagamento
//  cancelOpenCheckout(checkoutId) => // metodo de cancelamento de checkout em aberto
//}
//}
```
