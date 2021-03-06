import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from 'react-router-dom'
import './style.scss'
import vari from '../../../assets/scss/vari.module.scss';
import Select from 'react-select'
import gender_items from '../../../assets/json/gender.json';

import LogResBgPage from '../../../components/share/LogResBgPage';
//import SelectAddress from '../../../components/share/SelectAddress';
import { registerAsync } from '../../../redux/actions/authAction';
import { toast } from 'react-toastify';

const customStylesSelect = {
    option: (provided, state) => ({
      ...provided,
     
      
      backgroundColor: state.isDisabled
        ? undefined
        : state.isSelected
        ? vari.selectItemChoosed
        : state.isFocused
        ? vari.selectItemHover
        : undefined,
    }),
    
    singleValue: (provided, state) => {
      const opacity = state.isDisabled ? 0.5 : 1;
      const transition = 'opacity 300ms';
  
      return { ...provided, opacity, transition, fontSize:"20px" };
    }
  }



export default function Register(){
    const genderOptions = gender_items.map(({ id, name }) => ({ value: id, label: name }));
      
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        dayofbirth: '',
        phone: '',
        password: '',
        email: '',
        gender: null,
        address: '',
    })
    const [formValidError, setFomValidError] = useState({
        firstname: '',
        lastname: '',
        dayofbirth: '',
        phone: '',
        password: '',
        email: '',
        gender: '',
        address: '',
    })
    const [isValidForm, setIsValidForm] = useState(false);
    
    function handleChangeFormData(key){ 
        if (key === 'gender'){
            return (value) =>{
                setFormData({
                    ...formData,
                    [key]: value
                })
            }
        }

        return (evt) => {
            setFormData({
                ...formData,
                [key]: evt.target.value
            })
            console.log("kkk: ", formData); //note
        }
    }

    useEffect(() => {
        console.log("kkk22: ",formData); //note
        setFomValidError(checkValidateInput(formData));
    },[formData]);

    function checkValidateInput(formD){
        let err = {}
        if(!formD.firstname){
            err.firstname= "T??n l?? b???t bu???c."
        } 
        if(!formD.lastname){
            err.lastname= "H??? l?? b???t bu???c."
        } 
        if(!formD.dayofbirth){
            err.dayofbirth= "Ng??y sinh l?? b???t bu???c."
        } 
        if(!formD.phone){
            err.phone = "S??? ??i???n tho???i l?? b???t bu???c."
        } else if(formD.phone.length < 10){
            err.phone = "S??? ??i???n tho???i ch??a h???p l???."
        }
        if(!formD.password){
            err.password = "M???t kh???u l?? b???t bu???c."
        } 
        // else if(formD.password.length < 6){
        //     err.password = "M???t kh???u t???i thi???u 6 k?? t???!"
        // }
        if(!formD.email){
            err.email = "Email l?? b???t bu???c."
        } else if(!/\S+@\S+\.\S+/.test(formD.email)){
            err.email = "Email ch??a h???p l???."
        }
        if (!formD.gender) {
            err.gender = "M???i ch???n gi???i t??nh!"
        } 
        if (!formD.address) {
            err.address = "?????a ch??? l?? b???t bu???c."
        }
        console.log("mmm",err)

         if(err.firstname || err.lastname || err.dayofbirth || err.phone || err.password || err.email || err.gender || err.address) {
            setIsValidForm(false)
            //err.isValidForm = false;
            console.log("vao falsse")
        }else{
            setIsValidForm(true)
            //err.isValidForm = true;
            console.log("vao true")
        }
      
        return err;

    }

    let dispatch = useDispatch();
   
    function handleSaveUser(evt){
        evt.preventDefault();
        console.log("check save onclick")
        if(!isValidForm) return;
        
        console.log("check valid")

        const data = new FormData();
        data.append("HO", formData.lastname);
        data.append("TEN", formData.firstname);
        // data.append("GIOITINH", formData.gender);
        data.append("GIOITINH", 1);
        data.append("NGAYSINH", formData.dayofbirth);
        data.append("SDT", formData.phone);   
        data.append("EMAIL", formData.email);           
        data.append("DIACHI", formData.address);
        data.append("PASSWORD", formData.password);

        console.log("2000 data", data)
        //axios.post("https://httpbin.org/anything", data).then(res => console.log(res)).catch(err => console.log(err));

        const data2 = {
            HO: formData.lastname,
            TEN: formData.firstname,
            GIOITINH: 1,
            NGAYSINH: formData.dayofbirth,
            SDT: formData.phone,
            EMAIL: formData.email,
            DIACHI: formData.address,
            PASSWORD: formData.password
        }
        dispatch(registerAsync(data2))
        .then(res => {
            console.log("ok: ",res.ok )
            if (res.ok) {
              // Th??nh c??ng
                setFormData({
                    firstname: '',
                    lastname: '',
                    dayofbirth: '',
                    phone: '',
                    password: '',
                    email: '',
                    gender: null,
                    address: ''
                })
                history.push("/login")
            } else {
              // Th???t b???i
              //console.log("status",status)
            }
        });
     }

     let history = useHistory();
     const handleCancel = () => {
        // history.push("/admin/users");
        history.push("/");
     }

    return(
        <div className="register-container">
            <LogResBgPage>
               <div className="child">
                    <div className="register-title">????ng k??</div>

                    <div className="register-content">
                        <form  className="register-form" onSubmit={handleSaveUser}>
                            <div className="row-hh">
                                <div className="col-8">
                                    <div className="form-group">
                                        <label className="label">H???</label>
                                        <input id="name" type="text" className="form-control" placeholder=" "  
                                            value={formData.lastname} 
                                            onChange={handleChangeFormData('lastname')} 
                                        />
                                    { formValidError.lastname &&  <label className="label-error">{formValidError.lastname}</label> }
                                    </div>
                                </div>

                                <div className="col-4">
                                    <div className="form-group">
                                        <label className="label">T??n</label>
                                        <input id="name" type="text" className="form-control" placeholder=" "  
                                            value={formData.firstname} 
                                            onChange={handleChangeFormData('firstname')} 
                                        />
                                    { formValidError.firstname &&  <label className="label-error">{formValidError.firstname}</label> }
                                    </div>
                                </div>
                            </div>

                            <div className="row-hh">
                                <div className="col-8">
                                    <div className="form-group">
                                        <label className="label">Ng??y sinh</label>
                                        <input id="name" type="text" className="form-control" placeholder=" "  
                                            value={formData.dayofbirth} 
                                            onChange={handleChangeFormData('dayofbirth')} 
                                        />
                                    { formValidError.dayofbirth &&  <label className="label-error">{formValidError.dayofbirth}</label> }
                                    </div>
                                </div>

                                <div className="col-4">
                                    <div className="form-group">
                                        <label className="label">Gi???i t??nh</label>
                                        <Select options={genderOptions}
                                            className="select-hh"
                                            defaultValue={genderOptions[0]}
                                            placeholder="Gi???i t??nh"
                                            menuColor = "red"
                                            styles={customStylesSelect}
                                            value={formData.gender} 
                                            onChange={handleChangeFormData('gender')} 
                                        />
    
                                    </div>
                                </div>
                               
                            </div>

                            <div className="row-hh">
                                <div className="col-12">
                                    <div className="form-group">
                                        <label className="label">Email</label>
                                        <input id="email" type="email" className="form-control" placeholder=" " 
                                            value={formData.email} 
                                            onChange={handleChangeFormData('email')} 
                                        />
                                        { formValidError.email &&  <label className="label-error">{formValidError.email}</label> }
                                    </div>
                                </div>
                            </div>
                        
                        <div className="row-hh">
                                <div className="col-6">
                                    <div className="form-group">
                                        <label className="label">S??? ??i???n tho???i</label>
                                        <input id="phone" type="text" className="form-control" placeholder=" " 
                                            value={formData.phone} 
                                            onChange={handleChangeFormData('phone')} 
                                        />
                                        { formValidError.phone &&  <label className="label-error">{formValidError.phone}</label> }
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="form-group">
                                        <label className="label">M???t kh???u</label>
                                        <input id="password" type="password" className="form-control" placeholder=" " 
                                            value={formData.password} 
                                            onChange={handleChangeFormData('password')} 
                                        />
                                        { formValidError.password &&  <label className="label-error">{formValidError.password}</label> }
                                    </div>
                                </div>
                            </div>

                            <div className="row-hh">
                                <div className="col-12">
                                    <div className="form-group ">
                                        <label className="label">?????a ch???</label>
                                        <textarea type="text" className="form-control addressNo-user" placeholder=" "
                                            value={formData.address}
                                            onChange={handleChangeFormData('address')}
                                        />
                                        {formValidError.address && <label className="label-error">{formValidError.address}</label>}
                                    </div>
                                </div>
                            </div>

                            <div className="form-group last">
                                <div className="btn-left"><span onClick={()=>handleCancel()}>Tho??t</span></div>
                                <span className="btn-right"><button type="submit" className="form-control btn">????ng k??</button></span>
                               
                            </div>
                        </form>
                    </div>
                </div>
            </LogResBgPage>
        </div>
    )
}