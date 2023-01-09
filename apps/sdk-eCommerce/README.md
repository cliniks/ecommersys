# SDK ECOMMERCE B2B E B2C

## `_UNDER DEVELOPMENT_ `

`(Will not work until March, please wait the Release)`

## HOW WILL WORK

##### First we will import and Initialize the sdk package

1. importing the package

```
  import ecommersys from "ecommersys"
```

2. initialize the class

```
  const SDK = new ecommersys()
  // you can use new sdk(`YOUR-APP-TOKEN`) to connect right on the class creation
```

3. connect your app token (if you dont use your token on class creation)

```
  const connectSDK = await SDK.connect( {apptoken: { `YOUR-APP-TOKEN` } } )

  if(connectSDK.isError) throw new Error(connectSDK.isError.message)

  console.log(connectSDK.isSuccess)
        // Do what you need with the data... (connectSDK.isSuccess)
```

3. than set your application context to use all the individual classes

## User Example

```
  import { User } from "ecommersys"

  let myUser;

  const userAuth = await User.account.auth("USER_USERNAME", "USER_PASSWORD");

  if(userAuth.isError) throw new Error(userAuth.isError.message)

  const getMyUser = await User.account.getMyUser()

  if(getMyUser.isError) throw new Error(getMyUser.isError.message)

  myUser = getMyUser.isSuccess
        // Do what you need with the data... (getMyUser.isSuccess)
```

#### In this example:

    - Retun of any Promise is {isSuccess:AuthReturnType,isError:ErrorHandlingType}
    - If successed on User.auth method (like the SDK.connect example too),
    the sdk will abstract and will handle properly with the token for you,
    the token will be automatic joined into axios instance header
    - ErrorHandling type { code: number, message: string | Object }
    - On the exemple, we are using "throw new Error" on every ErrorHandling to
    stop and handle it on a simple way, but u can work at your way like
    returning an alert using some alert lib like toastfy for the user.

## Click on [Ecommersys](https://ecommersys.ikiradev.com) for more information.

##### (The link will be avalible soon)

###### All Rights Reserved for Ikiradev
