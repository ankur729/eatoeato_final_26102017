
var express=require('express');

var router=express.Router();
var mongojs=require('mongojs');

//var db=mongojs('mongodb://admin:root@ds127399.mlab.com:27399/eatoeat');
//var db=mongojs('mongodb://server1.idigitie.in:27017/eatoeatoDb');
var db = mongojs('mongodb://vmi142575.contaboserver.net:27017/eatoeato');
var ctrlCook=require('../controllers/ctrlCook.controller');

// router

// .get('/cook_food',function(req,res,next){

// // res.send('Task API');
// console.log('called new');
// res.status(200).json();
// // db.food_details.find(function(err,foods){

// //     if(err) throw err;

// //     res.json(foods);

// // })

// });

router

.post('/cook_login_check',ctrlCook.cook_login_check);

router

.post('/add-cook-info',ctrlCook.add_cook_info);

router

.post('/complete-cook-profile',function(req,res,next){

    


            db.cook_infos.findAndModify({
                query: { },
                update: { $set: { 
                    additional_phone:req.body.additional_phone,
                    street_address:req.body.street_address,
                    gender:req.body.gender,
                    landmark:req.body.landmark,
                    city:req.body.city,
                    pincode:req.body.pincode,
                    state:req.body.state,
                    longitude:req.body.longitude,
                    latitude:req.body.latitude,
                    about_us:req.body.about_us,
                    first_name:req.body.first_name,
                    last_name:req.body.last_name,
                    display_phone:req.body.display_phone,
                    display_email:req.body.display_email,
                    bank_type:req.body.bank_type,
                    bank_account_no:req.body.bank_account_no,
                    bank_ifsc:req.body.bank_ifsc,
                    vegetable_type:req.body.vegetable_type
                     } },
                new: true
            }, function (err, data, lastErrorObject) {
                if(err){
                        res.status(400);
                        res.send('error');
                         throw err;

                        }    
                        res.status(200);
                         res.send(data);
                        console.log('COOK PROFILE UPDATED');
            })




});


router

.post('/cook-pass-update',ctrlCook.cook_pass_update);


router

.post('/cook-pass-update-dashboard',ctrlCook.cook_pass_update_dashboard);

router

.post('/cook-forget-pass-update',ctrlCook.cook_forget_pass_update);

router
.post('/cook-account-deactivate',ctrlCook.cook_deactivate);

router
.post('/cook-profile-update',ctrlCook.cook_profile_update);

router
.post('/get-cook-profile-data',ctrlCook.get_cook_profile_data);


router
.post('/cook-company-details-update',ctrlCook.cook_company_details_update);



router
.get('/get-cuisines-list',ctrlCook.get_cusines_list);


router
.get('/get-occ-veg-list',ctrlCook.get_occ_veg_list);


router
.post('/add-food-details',ctrlCook.add_food_details);


router
.post('/get-cook-details',ctrlCook.get_cook_details);

router
.post('/remove-food-details',ctrlCook.remove_food_details);


router
.post('/edit-food-details',ctrlCook.edit_food_details);


router
.post('/update-food-details',ctrlCook.update_food_details);

router
.post('/get-cook-activation-status',ctrlCook.get_cook_activation_status);

router
.post('/cook-contact-validate',ctrlCook.cook_contact_validate);

router
.post('/cook-forget-pass-update',ctrlCook.cook_forget_pass_update);

router
.post('/send-verify-email-to-cook',ctrlCook.send_verify_email_to_cook);

router
.get('/cook-verify/:cook_id/:email',ctrlCook.cook_verify_email_params);

router
.post('/check-cook-complete-profile-info',ctrlCook.check_cook_complete_profile_info);


router
.post('/modify-order-status',ctrlCook.modify_order_status);


router
.post('/fetch-commission-info-cook',ctrlCook.fetch_commission_info);

router
.post('/commission-approved-by-cook',ctrlCook.commission_approved_by_cook);

module.exports = router;



// router

// .post('/add-user-info',function(req,res,next){

// // res.send('Task API');


//  console.log(req.body);
// db.user_infos .save({
//                     name:req.body.name,
//                     email:req.body.email,
//                     phone:req.body.phone,
//                     additional_phone:req.body.additional_phone,
//                     street_address:req.body.street_address,
//                     gender:req.body.gender,
//                     landmark:req.body.landmark,
//                     city:req.body.city,
//                     pincode:req.body.pincode,
//                     state:req.body.state,
//                     longitude:req.body.longitude,
//                     latitude:req.body.latitude,
//                     about_us:req.body.about_us,
//                     first_name:req.body.first_name,
//                     last_name:req.body.last_name,
//                     display_phone:req.body.display_phone,
//                     display_email:req.body.display_email,
//                     bank_type:req.body.bank_type,
//                     bank_account_no:req.body.bank_account_no,
//                     bank_ifsc:req.body.bank_ifsc,
//                     vegetable_type:req.body.vegetable_type
                    
//                     },function(err,foods){

//                             if(err) throw err;
                            
//                         res.send('success');
//                         console.log('user saved');

//                   })

// });
