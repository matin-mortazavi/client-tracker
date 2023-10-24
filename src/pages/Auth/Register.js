// import React, { useEffect } from "react";
// import { useForm, handleSubmit ,Controller } from "react-hook-form";
// import styles from "./Register.module.scss";
// import img from "../../assets/images/img.png";
// import { Link } from "react-router-dom";
// import axios from "axios";

// export default function Register() {
//   const {
//     register,
//     handleSubmit,
//     control,
//     formState,

//     formState: { errors,isValid }} = useForm();
//   const onSubmit = (data) => {
//     console.log(data);

//   };
//   // const watchedValue = watch('password'); // Replace 'myInput' with your input name
//   // const watchedValue2 = watch('email'); // Replace 'myInput' with your input name

//   {
//   }

//   return (
//     <div>
//       <div className={styles["form-wrapper"]}>
//         <form onSubmit={handleSubmit(onSubmit)} className={styles["form"]}>
//           <div className={styles["img-wrapper"]}>
//             {" "}
//             <img className={styles["form__img"]} src={img} alt="not founded" />
//           </div>
//           <p className={styles["login__title"]}>ورود</p>

//           <div className={styles["text-field"]}>

//             <input
//               className={styles['register__input']}
//               {...register("password ", {
//                 required: {
//                   value: true,
//                   message: "wtf",
//                 },
//                 minLength: { value: 4, message: "min" },
//               })}
//               type="password"
//             />

//              <label htmlFor="password">رمز عبور</label>
//           </div>
//           <div className={styles["text-field"]}>

//             <input
//               className={styles["register__input"]}
//               {...register("password ", {
//                 required: {
//                   value: true,
//                   message: "wtf",
//                 },
//                 minLength: { value: 4, message: "min" },
//               })}
//               type="password"
//             />
//              <label htmlFor="password">رمز عبور</label>
//           </div>
//           {errors.password?.type === "required" && <p>form-box</p>}

//           <button className={styles["register__btn"]} type="submit">
//             ورود
//           </button>
//           <p className={styles["register__text"]}>
//             اکانت دارید؟!{" "}
//             <Link className={styles["register__link"]} to={"#"}>
//               وارد شوید
//             </Link>
//           </p>
//         </form>
//       </div>
//     </div>
//   );
// }

import React from "react";
import { useForm, Controller } from "react-hook-form";
import styles from "./Form.module.scss"; // Import your CSS module
import img from "../../assets/images/img.png";
import user from "../../assets/SVGs/user-icon.svg";
import lock from "../../assets/SVGs/lock.png";
import { useState } from "react";
import eye from "../../assets/SVGs/eye-slash.svg";
import { Link, Navigate } from "react-router-dom";
import { redirect } from "react-router-dom";

import { useNavigate } from "react-router-dom";

import { registerUser } from "../../services/registerUser";
function RegisterPage() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  console.log(errors);
  const handlePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
    console.log(passwordVisible);
  };

  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(errors);
    console.log(data);

    navigate("/complite-data/", { state: { data } });
  };

  return (
    <div className={styles["form-wrapper"]}>
      <div className={styles["form-box"]}>
        <div className={styles.form}>
          <img className={styles["form__img"]} src={img} alt="not founded" />
          <h2 className={styles["form__title"]}>ثبت نام</h2>
          <form
            className={styles["form__content"]}
            onSubmit={handleSubmit(onSubmit)}
          >
            <div
              className={
                watch("email")
                  ? `${styles.notEmpty} ${styles.inputField}`
                  : `${styles.inputField}`
              }
            >
              <Controller
                name="email"
                control={control}
                rules={{ required: "Email is required" }}
                defaultValue={""}
                render={({ field }) => (
                  <>
                    {" "}
                    <img className={styles["form__icon"]} src={user} alt="" />
                    <input
                      className={styles["form__input"]}
                      {...field}
                      type="email"
                    />
                  </>
                )}
              />
              <label>ایمیل</label>
              {errors.email && (
                <p className={styles.errorText}>{errors.email.message}</p>
              )}
            </div>
            <div
              className={
                watch("email")
                  ? `${styles.notEmpty} ${styles.inputField}`
                  : `${styles.inputField}`
              }
            >
              <Controller
                name="password"
                control={control}
                rules={{ required: "Password is required" }}
                defaultValue={""}
                render={({ field }) => (
                  <>
                    {" "}
                    <img className={styles["form__icon"]} src={user} alt="" />
                    <input
                      className={styles["form__input"]}
                      {...field}
                      type={passwordVisible ? "text" : "password"}
                    />
                  </>
                )}
              />
              <label>پسورد</label>
              <img
                onClick={handlePasswordVisibility}
                className={styles["password-icon"]}
                src={eye}
                alt=""
              ></img>
              {errors.email && (
                <p className={styles.errorText}>{errors.email.message}</p>
              )}
            </div>

            <button className={styles["form__btn"]} type="submit">
              ثبت نام
            </button>
            <span className={styles["form__text"]}></span>
          </form>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
