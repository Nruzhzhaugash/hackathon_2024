"use client";
import React from "react";
import Input from "@/shared/ui/Input/Input";
import Dropdown from "@/shared/ui/Dropdown/DropdownCustom";
import path from "path";

const usersFilePath = path.join(process.cwd(), "public", "users.json");

const RegistrationPage: React.FC = () => {
  //   const dropwdownOptions = ["Мужчина", "Женщина", "Боевой вертолетик"];

  const [username, setUsername] = React.useState("");
  const [lastname, setLastname] = React.useState("");
  const [nickname, setNickname] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [birthdate, setBirthdate] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [gender, setGender] = React.useState("");

  const handleRegister = () => {
    if (password !== confirmPassword) {
      console.error("Passwords don't match");
      return;
    }

    const usersData = localStorage.getItem("users");
    const users = usersData ? JSON.parse(usersData) : [];

    users.push({
      username,
      password,
      lastname,
      phoneNumber,
      birthdate,
      nickname,
      gender,
      email,
    });

    localStorage.setItem("users", JSON.stringify(users));

    console.log("Registration successful");
  };

  return (
    <div className="mt-[60px] mb-[120px]">
      <h1 className="text-2xl mb-[50px]">РЕГИСТРАЦИЯ</h1>
      <form className="">
        <div className="flex items-center justify-between">
          <div>
            <div className="mb-[50px]">
              <h2 className="text-xl mb-[20px]">Имя</h2>
              <input
                type="text"
                placeholder="Введите свое имя"
                className="text-base text-primary w-[265px] h-[50px] font-involveSB border-brown placeholder-brown bg-transparent"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="mb-[50px]">
              <h2 className="text-xl mb-[20px]">Почта</h2>
              <input
                type="email"
                placeholder="Введите свою почту"
                className="text-base text-primary w-[375px] h-[50px] font-involveSB border-brown placeholder-brown bg-transparent"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-[50px]">
              <h2 className="text-xl mb-[20px]">Пароль</h2>
              <input
                type="password"
                placeholder="Введите пароль"
                className="text-base text-primary w-[210px] h-[50px] font-involveSB border-brown placeholder-brown bg-transparent"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <div>
            <div className="mb-[50px]">
              <h2 className="text-xl mb-[20px]">Фамилия</h2>
              <input
                type="text"
                placeholder="Введите свою фамилию"
                className="text-base text-primary font-involveSB border-brown placeholder-brown bg-transparent"
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
              />
            </div>
            <div className="mb-[50px]">
              <h2 className="text-xl mb-[20px]">Номер</h2>
              <input
                type="number"
                placeholder="Введите свой номер"
                className="text-base text-primary font-involveSB border-brown placeholder-brown bg-transparent"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>
            <div className="mb-[50px]">
              <h2 className="text-xl mb-[20px]">Повторите пароль</h2>
              <input
                type="password"
                placeholder="Повторите пароль"
                className="text-base text-primary font-involveSB border-brown placeholder-brown bg-transparent"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
          </div>
          <div>
            <div className="mb-[50px]">
              <h2 className="text-xl mb-[20px]">Никнейм</h2>
              <input
                type="text"
                placeholder="Введите свой никнейм"
                className="text-base text-primary w-[270px] h-[50px] font-involveSB border-brown placeholder-brown bg-transparent"
                value={nickname}
                onChange={(e) => setNickname(e.target.value)}
              />
            </div>
            <div className="mb-[50px]">
              <h2 className="text-xl mb-[20px]">Дата рождения</h2>
              <input
                type="date"
                placeholder="Введите свой номер"
                className="text-base text-primary w-[277px] h-[50px] font-involveSB border-brown placeholder-brown bg-transparent"
                value={birthdate}
                onChange={(e) => setBirthdate(e.target.value)}
              />
            </div>
            <div className="mb-[50px]">
              <h2 className="text-xl mb-[20px]">Пол</h2>
              <div>
                <input
                  type="text"
                  placeholder="введите пол"
                  className="text-base text-primary w-[277px] h-[50px] font-involveSB border-brown placeholder-brown bg-transparent"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                />
                {/* <Dropdown
                  value={gender}
                  onChange={setGender}
                  options={dropwdownOptions}
                /> */}
              </div>
            </div>
            <button onClick={handleRegister}>Register</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default RegistrationPage;
