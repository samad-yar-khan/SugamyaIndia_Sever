<h1 align="center">
    Sugamya India
</h1>

<blockquote align="center">
  <b><i>
        This is our solution to the problem statement , guven by the  . We have developed a 3 way application which can be used by people to avail the benefits of the  ADIP scheme using thier UDID cards. We also provide a portal for the government officials to visualise and update the data with ease so as to maximise the number of benficiaries and help as many people suffering from various disabilities. The portal also provides a fool proof way for the distribution of resources amongst benficiaries to  minimise the curroption and made it easier for NGOs to onboard volunteers for the distribution of resources.
  </i></b>
</blockquote>

<br/>

## Installation

1. To run the Web Application on your local system download Node.js - https://nodejs.org/en/download/ . This will give you access to the node package manager which is essential to run the project .

2.  1. The project uses MongoDB Atlas as the database service. Setup a MongoDB Atlas account. 
    2. Setup a new project and deploy a cluster. Connect the project to the MongoDB cluster by adding the URL provided by Atlas in the database configs. 
    3. Dont forget to set the password for the cluster in your environment variables, which is fetched through the environment folder.

3. Setup a JWT secret in your environment.


### 📌 Setting up project using `npm` :

1. Open this cloned folder in the text editor of your choice.
2. If you want to use the project using `npm` then that comes alongside when you download and install node js.

### 🚩 Running the Project Server  :

1. Open the terminal and type `cd backend/alimco_server-master` to enter the repo and install dependencies using `npm install`.
2. Run: `npm start`
3. Use [http://localhost:8000](http://localhost:8000) as the root for all API's.

## 💻 API DOCUMENTATION 

#### Endpoints
- Hosted API_ROOT - https://sihmasti.herokuapp.com/
- Authorization required - Requests require the JWT token. Set Authorization : Bearer <token> in header.
- Query params - Just add the params in the url 
- Form body - Send as body in fetch request 

### 1)USER  
    
#### 1. SignUp 

- POST
- End point - API_ROOT/api/v1/users/signup 
- Authorization Required - No
- Same Api endpoint can be used for signing up of different users - `Volunteers` , `Officials` and `Beneficiaries` , but with separate form feilds.
 
###### For Benficiaries 
- Form body 
  - udid - String
  - password - String
  - confirmPassword - String
  - email - String (Optional)
  - name_ - String
  - user_name - String (Optional)
  - state - String
  - city - String
  - district - String
  - pincode - String
  - phone_number - Number
  - beneficiary - 1 (Boolean)

 ###### For Volunteer
- Form body 
  - email - String (Optional)
  - password - String
  - confirmPassword - String
  - user_name - String 
  - name_ - String
  - state - String
  - city - String
  - district - String
  - pincode - String
  - phone_number - Number
  - volunteer - 1 (Boolean)
    
    
###### For Officials 
- Form body 
  - email - String (Optional)
  - password - String
  - confirmPassword - String
  - user_name - String 
  - name_ - String
  - state - String
  - city - String
  - district - String
  - pincode - String
  - phone_number - Number
  - official - 1 (Boolean)
 

#### 2. Login 

- POST
- End point - API_ROOT/api/v1/users/login 
- Authorization Required - No
- Form body
  - identifier - String (UDID for Beneficiaries and email for volunteers and official)
  - password - String

- Returns a JWT to be used for further authentication

- Returns JSON 

```
{
    "success": true,
    "message": "Sign in sucessfull , here is your token . Keep it safe !",
    "data": {
        "token": "acces_token_jwt"
    }
}
```

#### 3. Profile

- GET
- End point - API_ROOT/api/v1/users/profile/?id=dmmyID
- Authorization Required - Yes
- Params - Add user.id as param to get the user profile data



- Returns JSON 

```
{
    "message": "User profile fetched successfully!",
    "data": {
        "profile_user": {
            "_id": "6241f8f69e569b7b03551916",
            "user_name": "123",
            "name_": "Samad Yar Khan",
            "udid": "123",
            "identifier": "123",
            "age": 21,
            "district": "South West Delhi",
            "city": "New Delhi",
            "pincode": "110029",
            "beneficiary": true,
            "official": false,
            "volunteer": false,
            "ngo": false,
            "verified": false,
            "phone_number": "8447784803"
        },
        "user_disabilities": [
            {
                "_id": "62423139263c994728899a9b",
                "disability": {
                    "_id": "62422149682094344953f720",
                    "disability_name": "Hearing Impairment",
                    "disability_code": "HEA123",
                    "createdAt": "2022-03-28T20:57:45.812Z",
                    "updatedAt": "2022-03-28T20:57:45.812Z",
                    "__v": 0
                },
                "pending": true,
                "approved": false
            }
        ],
        "user_benefits": [
            {
                "_id": "624238bbb0b2c4bccbbfe1de",
                "benefit": {
                    "_id": "6242350a36c00659a3fc7997",
                    "benefit_name": "Free Rice",
                    "benefit_code": "RC1",
                    "details": "Rice for everyone",
                    "createdAt": "2022-03-28T22:22:02.389Z",
                    "updatedAt": "2022-03-28T22:22:02.389Z",
                    "__v": 0
                },
                "approved": false,
                "pending": true
            }
        ]
    },
    "success": true
}
```


#### 4. Fetching All Users

- All
- End point - API_ROOT/api/v1/users/all/
- Authorization Required - Yes
- Params - Add user.id as param to get the user profile data


- Returns JSON 

```

{
    "message": "usersFetched !",
    "success": true,
    "users": [
        {
            "_id": "6241f8f69e569b7b03551916",
            "user_name": "123",
            "name_": "Samad Yar Khan",
            "udid": "123",
            "identifier": "123",
            "age": 21,
            "district": "South West Delhi",
            "city": "New Delhi",
            "pincode": "110029",
            "beneficiary": true,
            "official": false,
            "volunteer": false,
            "ngo": false,
            "verified": false,
            "phone_number": "8447784803"
        },
        {
            "_id": "6241fc013cfa64280369bae4",
            "email": "smdyarkhan123@gmail.com",
            "user_name": "smdyarkhan123@gmail.com",
            "name_": "Samarth Arora",
            "identifier": "smdyarkhan123@gmail.com",
            "age": 21,
            "district": "South West Delhi",
            "city": "New Delhi",
            "pincode": "110029",
            "beneficiary": false,
            "official": false,
            "volunteer": true,
            "ngo": false,
            "verified": false,
            "ngo_name": "Enactus KGP",
            "phone_number": "8447784803"
        },
    ]
}

```

#### 5. Finding a Users

- GET
- End point - API_ROOT/api/v1/users/find/
- Authorization Required - Yes
- Form body
  - search_text - String (Can be a UDID or User Name or Email)
- Returns JSON 


```

{
    "message": "usersFetched !",
    "success": true,
    "usersByName": [],
    "usersByUserName": [
        {
            "_id": "6241f8f69e569b7b03551916",
            "user_name": "123",
            "name_": "Samad Yar Khan",
            "udid": "123",
            "identifier": "123",
            "age": 21,
            "district": "South West Delhi",
            "city": "New Delhi",
            "pincode": "110029",
            "beneficiary": true,
            "official": false,
            "volunteer": false,
            "ngo": false,
            "verified": false,
            "phone_number": "8447784803"
        },
        {
            "_id": "6241fc013cfa64280369bae4",
            "email": "smdyarkhan123@gmail.com",
            "user_name": "smdyarkhan123@gmail.com",
            "name_": "Samarth Arora",
            "identifier": "smdyarkhan123@gmail.com",
            "age": 21,
            "district": "South West Delhi",
            "city": "New Delhi",
            "pincode": "110029",
            "beneficiary": false,
            "official": false,
            "volunteer": true,
            "ngo": false,
            "verified": false,
            "ngo_name": "Enactus KGP",
            "phone_number": "8447784803"
        }
    ]
}
```


### 2)Disability

Disabilities can be of numerous types and can be edited by the officials

#### 1. Create a new Disability Type 

- POST
- End point - API_ROOT/api/v1/disability/create 
- Authorization Required - Yes
- Form body
  - disability_name - String
  - disability_code - String

- Returns the following upon success

```
{
    "data": {
        "benefit": {
            "disability_name": "Ruptured Spine",
            "benefit_code": "RSP1CX",
            "details": "",
            "_id": "624355b19a9ea4fb5beea746",
            "createdAt": "2022-03-29T18:53:37.237Z",
            "updatedAt": "2022-03-29T18:53:37.237Z",
            "__v": 0
        }
    },
    "message": "disability created!",
    "success": true
}
```

#### 2. Delete Disability (sorted by latest)

- GET
- End point - API_ROOT/api/v1/disability/delete/:id
- Authorization Required - Yes
- JSON Response

```
{
    "message": "Diability Type Delted successfully",
    "success": true,
}
```

#### 3.  Get All types of disabilities

- GET
- End point - API_ROOT/api/v1/disability/all
- Authorization Required - Yes

- JSON Reponse 


```
{
    "message": "Disabilities fetched successfully",
    "success": true,
    "disabilities": [
        {
            "_id": "62422149682094344953f720",
            "disability_name": "Hearing Impairment",
            "disability_code": "HEA123",
            "createdAt": "2022-03-28T20:57:45.812Z",
            "updatedAt": "2022-03-28T20:57:45.812Z",
            "__v": 0
        },
        {
            "_id": "62422172507a3f0f54402460",
            "disability_name": "Speach Issues Level 1",
            "disability_code": "SPIS1",
            "createdAt": "2022-03-28T20:58:26.859Z",
            "updatedAt": "2022-03-28T20:58:26.859Z",
            "__v": 0
        },
        {
            "_id": "6242217b507a3f0f54402465",
            "disability_name": "Speach Issues Level 4",
            "disability_code": "SPIS4",
            "createdAt": "2022-03-28T20:58:35.552Z",
            "updatedAt": "2022-03-28T20:58:35.552Z",
            "__v": 0
        }
    ]
}

```

## 3) Disabeled
    
The `Disabeled` object will contain a user and a disability. This will map a user with on dissability. If a user has multiple disabilited he/she will have to create multiple disabeled objects, or show multiple ways in which they are `Disabeled` by creating multiples 'Disabeled' objects which will have to be approved by admin
    
#### 1)User adding a disability using disability._id to their profile / Add Disabeled
    
- POST
- End point - API_ROOT/api/v1/disabeled/create/?id=disability_id
- Authorization Required - Yes
- User - benificiary

- JSON Reponse 
 
 ```
 {
    "message": "Disabile Person Added",
    "success": true,
    "newDisabeled": {
        "user": "6241f8f69e569b7b03551916",
        "disability": "6242217b507a3f0f54402465",
        "pending": true,
        "approved": false,
        "_id": "62434a849a9ea4fb5beea721",
        "createdAt": "2022-03-29T18:05:56.102Z",
        "updatedAt": "2022-03-29T18:05:56.102Z",
        "__v": 0
    }
}
```
    
#### 2)Getting All Disabeled People ( NOTE : if a user has multiple disabilities we get multiples disabeled objects for the user )
    
- GET
- End point - API_ROOT/api/v1/disabeled/create/
- Authorization Required - Yes
- User - official

- JSON Reponse 
 
 ```
 {
    "success": true,
    "disableData": [
        {
            "_id": "62423139263c994728899a9b",
            "user": "6241f8f69e569b7b03551916",
            "disability": {
                "_id": "62422149682094344953f720",
                "disability_name": "Hearing Impairment",
                "disability_code": "HEA123",
                "createdAt": "2022-03-28T20:57:45.812Z",
                "updatedAt": "2022-03-28T20:57:45.812Z",
                "__v": 0
            },
            "pending": true,
            "approved": false,
            "createdAt": "2022-03-28T22:05:45.636Z",
            "updatedAt": "2022-03-28T22:05:45.636Z",
            "__v": 0
        },
        {
            "_id": "62434a849a9ea4fb5beea721",
            "user": "6241f8f69e569b7b03551916",
            "disability": {
                "_id": "6242217b507a3f0f54402465",
                "disability_name": "Speach Issues Level 4",
                "disability_code": "SPIS4",
                "createdAt": "2022-03-28T20:58:35.552Z",
                "updatedAt": "2022-03-28T20:58:35.552Z",
                "__v": 0
            },
            "pending": true,
            "approved": false,
            "createdAt": "2022-03-29T18:05:56.102Z",
            "updatedAt": "2022-03-29T18:05:56.102Z",
            "__v": 0
        }
    ]

```
    
#### 3)Approving Diability of a benficiary
    
- GET
- End point - API_ROOT/api/v1/disabeled/approve?id='disabeled_id'
- Authorization Required - Yes
- User - official

- JSON Reponse 
 
 ```
 {
    "success": true,
    "message": "Approved Diability",
    "updatedDisabled": {
        "acknowledged": true,
        "modifiedCount": 1,
        "upsertedId": null,
        "upsertedCount": 0,
        "matchedCount": 1
    }
}
```
    
 #### 4)Disapproving Diability of a benficiary
    
- GET
- End point - API_ROOT/api/v1/disabeled/disapprove?id='disabeled_id'
- Authorization Required - Yes
- User - official

- JSON Reponse 
 
 ```
 {
    "success": true,
    "message": "Disapproved Diability",
    "updatedDisabled": {
        "acknowledged": true,
        "modifiedCount": 1,
        "upsertedId": null,
        "upsertedCount": 0,
        "matchedCount": 1
    }
}
```
  
 ### 3)Benefits

Benefits can be of numerous types and can be edited by the officials

#### 1. Create a new Benefit Type 

- POST
- End point - API_ROOT/api/v1/benefit/create 
- Authorization Required - Yes
- Form body
  - benefit_name - String
  - benefit_code - String

- Returns the following upon success

```
{
    "data": {
        "benefit": {
            "benefit_name": "Free Implants",
            "benefit_code": "FI1A",
            "details": "",
            "_id": "624355b19a9ea4fb5beea746",
            "createdAt": "2022-03-29T18:53:37.237Z",
            "updatedAt": "2022-03-29T18:53:37.237Z",
            "__v": 0
        }
    },
    "message": "benefit created!",
    "success": true
}
```

#### 2. Delete Benefit (sorted by latest)

- GET
- End point - API_ROOT/api/v1/benfit/delete/:id
- Authorization Required - Yes
- JSON Response

```
{
    "message": "Benefit Type Delted successfully",
    "success": true,
}
```

#### 3.  Get All types of benfits

- GET
- End point - API_ROOT/api/v1/benfit/all
- Authorization Required - Yes

- JSON Reponse 


```
{
    "message": "Benefits fetched successfully",
    "success": true,
    "benefits": [
        {
            "_id": "624234d436c00659a3fc7992",
            "benefit_name": "Free Wheat",
            "benefit_code": "WH1",
            "details": "Wheat for everyone",
            "createdAt": "2022-03-28T22:21:08.264Z",
            "updatedAt": "2022-03-28T22:21:08.264Z",
            "__v": 0
        },
        {
            "_id": "6242350a36c00659a3fc7997",
            "benefit_name": "Free Rice",
            "benefit_code": "RC1",
            "details": "Rice for everyone",
            "createdAt": "2022-03-28T22:22:02.389Z",
            "updatedAt": "2022-03-28T22:22:02.389Z",
            "__v": 0
        },
        {
            "_id": "624355b19a9ea4fb5beea746",
            "benefit_name": "Free Implants",
            "benefit_code": "FI1A",
            "details": "",
            "createdAt": "2022-03-29T18:53:37.237Z",
            "updatedAt": "2022-03-29T18:53:37.237Z",
            "__v": 0
        }
    ]
}

```

## 4) ProcessedBenefits
    
Processed Benefits are benefits which are demanded by a user and maps a user to a benfit. The benefit must be approved by official.
    
#### 1)User Demanding Benefit
    
- POST
- End point - API_ROOT/api/v1/disabeled/processedbenefit/?id=benfit_id
- Authorization Required - Yes
- User - benificiary

    
#### 2)Getting All Benfits Reqeusted  (Proccessed Benefits)
    
- GET
- End point - API_ROOT/api/v1/processedbenefit/create/
- Authorization Required - Yes
- User - official


    
#### 3)Approving Benefit Request of a benficiary
    
- GET
- End point - API_ROOT/api/v1/processedbenefit/approve?id='processedbenefit_id'
- Authorization Required - Yes
- User - official

    
 #### 4)Disapproving Benefits reqeuested a benficiary
    
- GET
- End point - API_ROOT/api/v1/processedbenefit/disapprove?id='processedbenefit_id'
- Authorization Required - Yes
- User - official


  

  

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.Please make sure to update tests as appropriate.
### 📌 Prerequisites

### 💻 1. System requirement :

1. Any system with basic configuration.
2. Operating System : Any (Windows / Linux / Mac).

### 💿 2. Software requirement :

1. Updated browser
2. Node.js installed (If not download it [here](https://nodejs.org/en/download/)).
3. Any text editor of your choice.

### ⚡ 3. Skill set :

1. Knowledge of git & github.
2. JavaScript
3. MongoDB
4. Node.js
5. Express.js

## Feel free to test the project and don't forget to star the repo if it proves helpful !

