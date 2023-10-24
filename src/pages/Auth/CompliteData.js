import React from "react";
import { useForm, Controller } from "react-hook-form";
import { Link } from "react-router-dom";
import styles from "./Form.module.scss"; // Import your CSS module
import img from "../../assets/images/img.png";
import user from "../../assets/SVGs/user-icon.svg";
import lock from "../../assets/SVGs/lock.png";
import { useState } from "react";
import eye from "../../assets/SVGs/eye-slash.svg";
import calendar from "../../assets/SVGs/calendar.svg";
import { useLocation } from "react-router-dom";
import registerUser from "../../services/registerUser";

function CompliteData(data) {
  const location = useLocation();

  const [ageVisible, setageVisible] = useState(false);
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  console.log(errors);
  const handleageVisibility = () => {
    setageVisible(!ageVisible);
    console.log(ageVisible);
  };
  // console.log(location.state , 'hi');

  const onSubmit = (data) => {
    console.log("age type : ", data);
    // You can handle registration logic here
    data.age = Number(data.age);
    const newUser = { ...location.state.data, ...data };
    registerUser(newUser);
  };

  return (
    <div className={styles["form-wrapper"]}>
      <div className={styles["form-box"]}>
        <div className={styles.form}>
          <img className={styles["form__img"]} src={img} alt="not founded" />
          <h2 className={styles["form__title"]}>اطلاعات فردی</h2>
          <form
            className={styles["form__content"]}
            onSubmit={handleSubmit(onSubmit)}
          >
            <div
              className={
                watch("name")
                  ? `${styles.notEmpty} ${styles.inputField}`
                  : `${styles.inputField}`
              }
            >
              <Controller
                name="name"
                control={control}
                rules={{ required: "Name is required", maxLength: 16 }}
                defaultValue={""}
                render={({ field }) => (
                  <>
                    {" "}
                    <img className={styles["form__icon"]} src={user} alt="" />
                    <input
                      className={styles["form__input"]}
                      {...field}
                      type="text"
                    />
                  </>
                )}
              />
              <label>نام</label>
             
            </div>

            <div
              className={`${styles.inputField} ${
                watch("age")
                  ? `${styles.notEmpty} ${styles.inputField}`
                  : `${styles.inputField}`
              }`}
            >
              <Controller
                name="age"
                control={control}
                rules={{ required: "age is required" }}
                defaultValue={0}
                render={({ field }) => (
                  <>
                    <img
                      className={styles["form__icon"]}
                      src={calendar}
                      alt=""
                    />

                    <input
                      className={styles["form__input"]}
                      {...field}
                      type="number"
                    />
                  </>
                )}
                valueAsNumber={true}
              />
              <label>سن </label>
              
            </div>

            <button className={styles["form__btn"]} type="submit">
              تایید
            </button>
            <span className={styles["form__text"]}></span>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CompliteData;
