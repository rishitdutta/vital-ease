/**
 * @source: https://github.com/pranjalkole/vital-ease
 *
 * @license AGPL-3.0-only
 *
 * Copyright (C) 2023  Pranjal Kole <pranjal.kole7@gmail.com>
 */

import { render, JSX } from "preact"
import { useState } from "preact/hooks"
import vitalease from "/vitalease.svg"
import chatbot from "/chat.svg"
import calendar from "/calendar.png"
import call from "/call.png"
import chat from "/chat.png"
import records from "/records.png"
import contact from "/call.svg"
import user from "/user.svg"

import "tailwindcss/tailwind.css";

function Appointment({ doctor }: { doctor: string }) {
  return (
    <div class="m-2 p-1 rounded-md bg-gray-200">
      <h3>DD/MM/YY</h3>
      <div>
        <h4>Dr {doctor}</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet ante non dolor</p>
      </div>
    </div>
  )
}

function Contact({ content }: { content: string}) {
  return (
    <div class="flex gap-2">
      <img src={contact} class="h-12" />
      <h1 class="bg-gray-200 rounded-md text-xl grow p-2">{content}</h1>
    </div>
  )
}

function Dashboard({ name }: { name: string }) {
  enum State {
    Calendar,
    MyReport,
    EContacts,
    Chatbot
  }

  const [state, setState] = useState(State.Calendar);

  function DashboardHead() {
    return (
      <div class="p-2 basis-3/12 bg-zinc-200 text-white flex flex-col gap-2 items-stretch overflow-hidden justify-around">
        <img src={user} class="w-1/2 self-center" />
        <button onClick={() => setState(State.Calendar)} class="bg-emerald-500 p-4 m-2 rounded-md">Calendar</button>
        <button onClick={() => setState(State.MyReport)} class="bg-emerald-500 p-4 m-2 rounded-md">My Report</button>
        <button onClick={() => setState(State.EContacts)} class="bg-emerald-500 p-4 m-2 rounded-md">E-Contacts</button>
        <button onClick={() => setState(State.Chatbot)} class="bg-emerald-500 p-4 m-2 rounded-md">ChatBot</button>
      </div>
    )
  }

  if (state == State.Calendar) {
    return (
      <div class="flex h-screen">
        <DashboardHead />
        <div class="basis-9/12">
          <h1 class="bg-green-500 text-white p-2 font-bold text-2xl">{name}</h1>
          <span class="px-2 bg-green-300">Appointments</span>
          <Appointment doctor="XYZ" />
          <Appointment doctor="ABC" />
        </div>
      </div>
    )
  } else if (state == State.MyReport) {
    return (
      <div class="flex h-screen">
        <DashboardHead />
        <div class="basis-9/12 flex flex-col gap-2">
          <h1 class="bg-green-500 text-white p-2 font-bold text-2xl">{name}</h1>
          <div class="m-2">
            <span class="bg-gray-200 px-4 py-2 font-bold text-xl rounded-lg">My Report</span>
          </div>
        </div>
      </div>
    )
  } else if (state == State.EContacts) {
    return (
      <div class="flex h-screen">
        <DashboardHead />
        <div class="basis-9/12 flex flex-col gap-2">
          <h1 class="bg-green-500 text-white p-2 font-bold text-2xl">{name}</h1>
          <div class="px-2 flex justify-between m-2">
            <h1 class="text-4xl">Your emergency contacts</h1>
            <button class="bg-gray-200 p-2 rounded-md">+ Add more</button>
          </div>
          <div class="flex flex-col gap-4">
            <Contact content="Ambulance" />
            <Contact content="VitalEase" />
            <Contact content="Doctor" />
            <Contact content="Nurse" />
          </div>
        </div>
      </div>
    )
  }
  /* state is State.Chatbot */
  return (
    <div class="flex h-screen">
      <DashboardHead />
      <div class="basis-9/12">
          <h1 class="bg-green-500 text-white p-2 font-bold text-2xl">{name}</h1>
      </div>
    </div>
  )
}

function Register() {
  enum State {
    Form,
    Success
  }
  const [state, setState] = useState(State.Form);
  const handleRegister = (event: JSX.TargetedEvent<HTMLFormElement>) => {
    event.preventDefault();
    setState(State.Success);
  };
  if (state == State.Form) {
    return (
      <form class="flex grow rounded-md justify-center mx-auto my-8 items-start bg-gray-200 p-2 flex-col" onSubmit={handleRegister}>
        <label>
          Name:
          <input required name="name" class="border border-pink-800 rounded-lg p-1 ml-1" />
        </label>
        <label>
          Email:
          <input required name="email" type="email" class="border border-pink-800 rounded-lg p-1 ml-1" />
        </label>
        <label>
          Password:
          <input required name="password" type="password" class="border border-pink-800 rounded-lg p-1 ml-1" />
        </label>
        <button class="text-pink-600 rounded-lg border border-white hover:text-pink-200 hover:bg-pink-700 hover:border-pink-800">Register</button>
      </form>
    )
  }
  /* state is State.Success */
  return (
    <form class="flex grow mx-auto my-8 rounded-md justify-center bg-gray-200 p-2 flex-col items-start">
      <p class="text-green-950">Registration Successful</p>
    </form>
  )
}

function Login({ handleLogin }: { handleLogin: JSX.GenericEventHandler<HTMLFormElement> }) {
  return (
    <form class="flex grow mx-auto px-2 my-8 rounded-md flex-col items-start justify-center bg-gray-200" onSubmit={handleLogin}>
      <label>
        Name:
        <input required name="name" class="border border-pink-800 rounded-lg p-1 ml-1" />
      </label>
      <label>
        Password:
        <input required name="password" type="password" class="border border-pink-800 rounded-lg p-1 ml-1" />
      </label>
      <button class="text-pink-600 rounded-lg border border-white hover:text-pink-200 hover:bg-pink-700 hover:border-pink-800">Login</button>
    </form>
  )
}

function App() {
  enum State {
    Home,
    Register,
    Login,
    Dashboard
  }
  const [state, setState] = useState(State.Home);
  const [name, setName] = useState("");

  const handleRegister = () => setState(State.Register);
  const handleLoginPage = () => setState(State.Login);
  const handleLogin = (event: JSX.TargetedMouseEvent<HTMLFormElement>) => {
    event.preventDefault();
    setName((event.currentTarget.elements.namedItem("name") as HTMLInputElement).value);
    setState(State.Dashboard);
  }

  if (state == State.Home) {
    return (
      <>
        <div class="h-screen bg-hero-pattern flex flex-col">
          <header class="bg-green-400 flex items-center justify-between opacity-80">
            <button onClick={() => setState(State.Home)}><img src={vitalease} class="w-40" /></button>
            <div class="flex gap-2">
              <button onClick={handleLoginPage} class="px-4 py-2 bg-white rounded-md font-black font-serif">Log in</button>
              <button onClick={handleRegister} class="px-4 py-2 bg-white rounded-md font-black font-serif">Sign up</button>
            </div>
          </header>
          <button><img src={chatbot} class="bg-green-800 w-18 fixed bottom-0 right-0 m-4 p-2 rounded-full" /></button>
          <main class="flex grow justify-end items-center mx-12">
            <div class="flex flex-col items-center max-w-prose">
              <img src={vitalease} class="w-96" />
              <p class="font-serif text-lg">Healthier and more connected future for all</p>
              <p class="text-xl font-serif">Revolutionizing health management with intuitive schedules, emergency alerts, seamless communication, and AI-powered assistance.</p>
              <button onClick={handleRegister} class="bg-emerald-600 px-8 py-2 rounded-md">Join Now</button>
            </div>
          </main>
        </div>
        <div class="h-screen flex flex-col md:flex-row bg-green-100">
          <img src={calendar} class="max-h-screen" />
          <div>
            <h1 class="bg-green-700 text-4xl text-white font-serif font-bold p-2">CALENDAR</h1>
            <p class="bg-green-200 text-3xl py-4 px-12">Effortlessly manage your medication routine with daily, weekly, and monthly views. Drag-and-drop functionality ensures scheduling adjustments are a breeze</p>
          </div>
        </div>
        <div class="h-screen flex bg-green-400">
          <div>
            <h1 class="bg-green-700 text-4xl text-white font-serif font-bold p-2">EMERGENCY CONTACTS</h1>
            <p class="bg-green-200 text-3xl py-4 px-12">Prioritize safety with an easily accessible emergency section. Reach out to designated contacts swiftly through in-app alerts and automated SMS notifications in critical situations.</p>
          </div>
          <img src={call} class="max-h-screen" />
        </div>
        <div class="h-screen flex bg-green-200">
          <img src={chat} class="max-h-screen" />
          <div>
            <h1 class="bg-green-700 text-4xl text-white font-serif font-bold p-2">MEDICAL RECORDS</h1>
            <p class="bg-green-200 text-3xl py-4 px-12">Upload your medical records, set goals and visualize the progress you make. Share your records and get feedback and recommendations from doctors and experts.</p>
          </div>
        </div>
        <div class="h-screen flex bg-green-400">
          <div>
            <h1 class="bg-green-700 text-4xl text-white font-serif font-bold p-2">AI CHATBOT</h1>
            <p class="bg-green-200 text-3xl py-4 px-12">Get instant answers to medication FAQs, dietary queries, and user assistance. Our friendly chatbot, powered by OpenAI, ensures a coversational interface for step-by-step guidance and troubleshooting.</p>
          </div>
          <img src={records} class="max-h-screen" />
        </div>
        <div class="h-screen bg-green-200 flex justify-center items-center">
          <button onClick={handleLoginPage} class="text-xl font-serif font-black bg-green-600 rounded-md p-2">JOIN NOW</button>
        </div>
      </>
    )
  } else if (state == State.Register) {
    return (
      <div class="h-screen bg-hero-pattern flex flex-col">
        <header class="bg-green-400 flex items-center justify-between opacity-80">
          <button onClick={() => setState(State.Home)}><img src={vitalease} class="w-40" /></button>
          <div class="flex gap-2">
            <button onClick={handleLoginPage} class="px-4 py-2 bg-white rounded-md font-black font-serif">Log in</button>
            <button onClick={handleRegister} class="px-4 py-2 bg-white rounded-md font-black font-serif">Sign up</button>
          </div>
        </header>
        <button><img src={chatbot} class="bg-green-800 w-18 fixed bottom-0 right-0 m-4 p-2 rounded-full" /></button>
        <Register />
      </div>
    )
  } else if (state == State.Login) {
    return (
      <div class="h-screen bg-hero-pattern flex flex-col">
        <header class="bg-green-400 flex items-center justify-between opacity-80">
          <button onClick={() => setState(State.Home)}><img src={vitalease} class="w-40" /></button>
          <div class="flex gap-2">
            <button onClick={handleLoginPage} class="px-4 py-2 bg-white rounded-md font-black font-serif">Log in</button>
            <button onClick={handleRegister} class="px-4 py-2 bg-white rounded-md font-black font-serif">Sign up</button>
          </div>
        </header>
        <button><img src={chatbot} class="bg-green-800 w-18 fixed bottom-0 right-0 m-4 p-2 rounded-full" /></button>
        <Login handleLogin={handleLogin} />
      </div>
    )
  } else if (state == State.Dashboard) {
    return <Dashboard name={name} />
  }
  return <>Bug in application</>
}

render(<App />, document.getElementById("app")!)
/* vim: set et sw=2: */
