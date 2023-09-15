# Blocto WaaS Demo
##### Currently only support Flow, for more details please go to [here](https://blocto-waas.readme.io/reference/onboarding-process)

### Setup

#### Install Dependencies
```
yarn install
```
#### Env file
1. create a .env file
2. fill the key and secret

If you do not have a key yet, please contact the account manager (bd@portto.com) or DevRel (Dawson@portto.com)

#### Switch env
Just change the domain in `src/utils/constant.ts`

---

### Create an Account
##### Modify the email and try below command
```
yarn run create-account
```

### Get an Account

##### Modify the email and try below command
```
yarn run get-account
```

### Send a Transaction

##### Modify the user id and try below command
```
yarn run sign-transaction
```

### List Transaction History of an Account

##### Modify the user id and try below command
```
yarn run list-transactions
```

### Get a Specific Transaction of an Account

##### Modify the user id, tx hash and try below command
```
yarn run get-transaction
```