import React from "react";
import { useForm, Controller } from "react-hook-form";
import { Link, redirect, useNavigate } from "react-router-dom";
import styles from "./Form.module.scss"; // Import your CSS module
import img from "../../assets/images/img.png";
import user from "../../assets/SVGs/user-icon.svg";
import lock from "../../assets/SVGs/lock.png";
import { useState } from "react";
import eye from "../../assets/SVGs/eye-slash.svg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import loginUser from "../../services/LoginService";

function RegisterPage() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    mode: 'onBlur', // Set the mode to 'onBlur'
  });
  console.log(errors);
  const handlePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
    console.log(passwordVisible);
  };

  const onSubmit =async (data) => {
    const idk = await loginUser(data);
    console.log(idk);
  };

  return (
    <div className={styles["form-wrapper"]}>
      <div className={styles["form-box"]}>
        <div className={styles.form}>
          <img className={styles["form__img"]} src={img} alt="not founded" />
          <h2 className={styles["form__title"]}>ورود</h2>
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

            
            </div>
            {errors.email &&
                
               
                <p className={styles["error-messege"]}>{errors.email.message}</p>
              }

            <div
              className={
                watch("password")
                  ? `${styles.notEmpty} ${styles.inputField}`
                  : `${styles.inputField}`
              }
            >
              <Controller
                name="password"
                control={control}
                rules={{ required: "Password is required",minLength : 6 }}
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
                
                className={styles["password-icon"]}
                src={eye}
                alt=""
                onClick={handlePasswordVisibility}
              ></img>
              
            </div>
            {errors.password &&
                
               
                <p className={styles["error-messege"]}>{errors.password.message}</p>
              }

            <button className={styles["form__btn"]} type="submit">
              ورود
            </button>
            <span className={styles["form__text"]}>
              {" "}
              حساب کاربری ندارید؟{" "}
              <Link className={styles["form__link"]} to={"/register"}>
                ثبت نام
              </Link>
            </span>
          </form>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
