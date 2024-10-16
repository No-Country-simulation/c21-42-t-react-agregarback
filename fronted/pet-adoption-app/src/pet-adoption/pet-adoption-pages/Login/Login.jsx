import React from 'react';
import { useNavigate } from 'react-router-dom';
import LoginForm from './LoginForm/LoginForm';

const Login = () => {
  const navigate = useNavigate();

  const handleCreateAccount = () => {
    navigate('/personal-data');
  };

  const handleLogin = () => {
    navigate('/login');
  };

  return (
    <>
      <img src="src/assets/status-bar.jpg" alt="status bar" className="w-full"/>
      <div className="flex flex-col justify-center items-center h-screen p-5 bg-main-background">
        <LoginForm></LoginForm>
        <div className="flex flex-col justify-center items-center mb-2">
          <button className="flex items-center justify-center w-[22rem] h-14 mb-2 font-semibold rounded-lg bg-main-background border border-neutral-gray">
            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.7551 9.81818V14.4654H19.6197C19.3182 15.96 18.4137 17.2255 17.057 18.0764L21.1966 21.0982C23.6085 19.0037 25 15.9274 25 12.2728C25 11.4219 24.9189 10.6037 24.7681 9.81831L12.7551 9.81818Z" fill="#4285F4"/>
            <path d="M5.60669 14.2841L4.67305 14.9564L1.36823 17.3782C3.46704 21.2945 7.76871 24 12.7548 24C16.1986 24 19.0859 22.9309 21.1964 21.0982L17.0568 18.0764C15.9204 18.7964 14.4709 19.2328 12.7548 19.2328C9.43847 19.2328 6.6208 17.1274 5.61191 14.291L5.60669 14.2841Z" fill="#34A853"/>
            <path d="M1.36819 6.62177C0.498562 8.23624 0 10.0581 0 11.9999C0 13.9416 0.498562 15.7635 1.36819 17.378C1.36819 17.3888 5.61228 14.2798 5.61228 14.2798C5.35718 13.5598 5.20639 12.7962 5.20639 11.9997C5.20639 11.2033 5.35718 10.4397 5.61228 9.71969L1.36819 6.62177Z" fill="#FBBC05"/>
            <path d="M12.7551 4.77817C14.6336 4.77817 16.3033 5.38906 17.6368 6.56726L21.2894 3.13094C19.0747 1.18916 16.199 0 12.7551 0C7.76897 0 3.46704 2.69454 1.36823 6.62181L5.61218 9.71999C6.62095 6.88361 9.43873 4.77817 12.7551 4.77817Z" fill="#EA4335"/>
            </svg>
            <span className="pl-2">Continuar con Google</span>
          </button>
          <button className="flex items-center justify-center w-[22rem] h-14 mb-2 font-semibold rounded-lg bg-main-background border border-neutral-gray">
            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.7899 5.53846C13.8732 5.53846 15.2311 4.8061 16.0397 3.82962C16.7721 2.94469 17.3061 1.70884 17.3061 0.472982C17.3061 0.30515 17.2908 0.137317 17.2603 0C16.055 0.0457724 14.6055 0.808646 13.7359 1.8309C13.0493 2.60903 12.4237 3.82962 12.4237 5.08074C12.4237 5.26383 12.4542 5.44692 12.4695 5.50795C12.5458 5.5232 12.6678 5.53846 12.7899 5.53846ZM8.97552 24C10.4555 24 11.1116 23.0083 12.9577 23.0083C14.8344 23.0083 15.2463 23.9695 16.8941 23.9695C18.5114 23.9695 19.5947 22.4743 20.617 21.0095C21.7613 19.3312 22.2343 17.6834 22.2648 17.6071C22.158 17.5766 19.0607 16.3102 19.0607 12.7552C19.0607 9.67324 21.5019 8.28481 21.6392 8.178C20.0219 5.85887 17.5655 5.79784 16.8941 5.79784C15.0785 5.79784 13.5985 6.89638 12.6678 6.89638C11.6608 6.89638 10.3334 5.85887 8.76191 5.85887C5.77145 5.85887 2.73521 8.33058 2.73521 12.9994C2.73521 15.8983 3.86427 18.965 5.2527 20.9485C6.44278 22.6268 7.48029 24 8.97552 24Z" fill="black"/>
            </svg>
            <span className="pl-2">Continuar con Apple</span>
          </button>
          <button className="flex items-center justify-center w-[22rem] h-14 mb-2 font-semibold rounded-lg bg-main-background border border-neutral-gray">
            <svg width="25" height="18" viewBox="0 0 25 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.70045 11.6478C2.70045 12.602 2.91015 13.3355 3.18395 13.7787C3.54291 14.3592 4.07861 14.6055 4.62437 14.6055C5.32856 14.6055 5.97231 14.4306 7.21402 12.7137C8.20849 11.3374 9.38061 9.4061 10.169 8.19461L11.5042 6.14249C12.4318 4.71763 13.505 3.13344 14.7366 2.06022C15.7412 1.18388 16.8254 0.696716 17.9169 0.696716C19.7484 0.696716 21.4937 1.75803 22.8288 3.7488C24.2903 5.92913 25 8.67536 25 11.5095C25 13.1944 24.6676 14.4325 24.1026 15.4105C23.5568 16.3564 22.4928 17.3014 20.7025 17.3014V14.6046C22.2354 14.6046 22.6173 13.1963 22.6173 11.5846C22.6173 9.28798 22.0816 6.73862 20.9022 4.91726C20.0652 3.62518 18.9801 2.83583 17.786 2.83583C16.4948 2.83583 15.4564 3.80924 14.2889 5.54544C13.668 6.46757 13.0307 7.59207 12.3155 8.86034L11.528 10.2559C9.94561 13.0617 9.54452 13.6999 8.75426 14.7548C7.36786 16.6009 6.18384 17.3014 4.62529 17.3014C2.77646 17.3014 1.60708 16.5011 0.882752 15.2942C0.290282 14.3116 0 13.0214 0 11.5507L2.70045 11.6478Z" fill="#0081FB"/>
            <path d="M2.12903 3.94019C3.36708 2.03183 5.15364 0.697632 7.20302 0.697632C8.38979 0.697632 9.56923 1.04927 10.8009 2.05473C12.1488 3.1545 13.5847 4.96488 15.3767 7.95012L16.0195 9.0215C17.5708 11.6057 18.4526 12.9344 18.9691 13.5616C19.633 14.3665 20.0982 14.6065 20.7025 14.6065C22.2354 14.6065 22.6173 13.1981 22.6173 11.5864L24.9991 11.5113C24.9991 13.1963 24.6667 14.4343 24.1017 15.4123C23.5559 16.3582 22.4918 17.3033 20.7016 17.3033C19.589 17.3033 18.6028 17.0615 17.5131 16.0332C16.6752 15.2438 15.6954 13.8418 14.9417 12.5809L12.7001 8.83561C11.5756 6.95565 10.5436 5.5546 9.94559 4.92C9.30276 4.2378 8.4777 3.41365 7.15906 3.41365C6.09225 3.41365 5.18661 4.16179 4.42839 5.30735L2.12903 3.94019Z" fill="url(#paint0_linear_237_2996)"/>
            <path d="M7.15908 3.41182C6.09227 3.41182 5.18662 4.15996 4.42841 5.30552C3.3561 6.9236 2.70045 9.33285 2.70045 11.6478C2.70045 12.602 2.91015 13.3355 3.18395 13.7787L0.881836 15.2951C0.290282 14.3116 0 13.0214 0 11.5507C0 8.87774 0.73349 6.09121 2.12904 3.93927C3.36709 2.03092 5.15366 0.696716 7.20303 0.696716L7.15908 3.41182Z" fill="url(#paint1_linear_237_2996)"/>
            <defs>
            <linearGradient id="paint0_linear_237_2996" x1="5.4192" y1="8.56923" x2="22.6323" y2="9.43861" gradientUnits="userSpaceOnUse">
            <stop stop-color="#0064E1"/>
            <stop offset="0.4" stop-color="#0064E1"/>
            <stop offset="0.83" stop-color="#0073EE"/>
            <stop offset="1" stop-color="#0082FB"/>
            </linearGradient>
            <linearGradient id="paint1_linear_237_2996" x1="3.60133" y1="12.7812" x2="3.60133" y2="6.43497" gradientUnits="userSpaceOnUse">
            <stop stop-color="#0082FB"/>
            <stop offset="1" stop-color="#0064E0"/>
            </linearGradient>
            </defs>
            </svg>
            <span className="pl-2">Continuar con Meta</span>
          </button>
          <div className="flex flex-row my-7">
            <svg width="167" height="2" viewBox="0 0 167 2" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="0.780334" y1="1.38818" x2="167.001" y2="1.38818" stroke="#484646"/>
            </svg>
            <p className="px-3">O</p>
            <svg width="167" height="2" viewBox="0 0 167 2" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="0.780334" y1="1.38818" x2="167.001" y2="1.38818" stroke="#484646"/>
            </svg>
          </div>
          <button className="w-[22rem] px-6 py-4 rounded-xl border-none">
            <span className="text-secondary-orange font-semibold underline">Creá tu cuenta</span>
          </button>
        </div>
        <img src="src/assets/paw-prints.png" alt="paw-prints" className="absolute right-[2rem] bottom-[-1rem]"/>
      </div>
    </>
  );
};

export default Login;