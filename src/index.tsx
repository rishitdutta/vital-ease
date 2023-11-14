/**
 * @source: https://github.com/pranjalkole/vital-ease
 *
 * @license AGPL-3.0-only
 *
 * Copyright (C) 2023  Pranjal Kole <pranjal.kole7@gmail.com>
 */

import { render, JSX } from "preact"
import { useState, StateUpdater } from "preact/hooks"
import "./index.css"
import vitalease from "/vitalease.svg"
import chatbot from "/chat.svg"
import calendar from "/calendar.png"
import call from "/call.png"
import chat from "/chat.png"
import records from "/records.png"
import contact from "/call.svg"
import user from "/user.svg"

enum State {
  Home,
  Register,
  Login,
  Dashboard
}

function Appointment({ doctor }: { doctor: string }) {
  return (
    <div>
      <h3 class="text-xl">DD/MM/YY</h3>
      <div class="text-lg bg-gray-200 rounded-md p-4">
        <h4 class="inline-block bg-green-500 font-bold rounded-md px-4 py-1">Dr {doctor}</h4>
        <p class="px-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet ante non dolor</p>
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
        <button onClick={() => setState(State.Calendar)} class="text-xl bg-green-500 p-4 m-2 rounded-md font-bold">Calendar</button>
        <button onClick={() => setState(State.MyReport)} class="text-xl bg-green-500 p-4 m-2 rounded-md font-bold">My Report</button>
        <button onClick={() => setState(State.EContacts)} class="text-xl bg-green-500 p-4 m-2 rounded-md font-bold">E-Contacts</button>
        <button onClick={() => setState(State.Chatbot)} class="text-xl bg-green-500 p-4 m-2 rounded-md font-bold">ChatBot</button>
      </div>
    )
  }

  if (state == State.Calendar) {
    return (
      <div class="flex h-screen">
        <DashboardHead />
        <div class="basis-9/12 flex flex-col gap-2">
          <h1 class="bg-green-500 text-white p-2 font-bold text-2xl">{name}</h1>
          <div>
            <h2 class="inline-block px-4 py-1 bg-green-200 text-xl">Appointments</h2>
          </div>
          <div class="flex flex-col gap-4 px-4">
            <Appointment doctor="XYZ" />
            <Appointment doctor="ABC" />
          </div>
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
            <span class="bg-gray-200 px-4 py-2 font-bold text-xl rounded-md">My Report</span>
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

const Input = (props: { id: string, type?: string }) => <input required {...props} class="px-2 py-1 w-full" />

function Register({ setState }: { setState: StateUpdater<State> }) {
  const [registerSuccess, setRegisterSuccess] = useState(false);
  const handleRegister = (event: JSX.TargetedEvent<HTMLFormElement>) => {
    event.preventDefault();
    setRegisterSuccess(true);
  };
  if (!registerSuccess) {
    return (
      <div class="grow flex justify-center items-center">
        <div class="w-full sm:w-7/12 md:w-1/2 lg:w-1/3 xl:1/4 flex flex-col">
          <div class="glass-green-dark">
            <h1 class="text-white text-center text-3xl py-2">Register</h1>
          </div>
          <form class="flex flex-col justify-start gap-4 px-8 py-4 glass text-xl" onSubmit={handleRegister}>
            <div class="flex flex-col gap-1">
              <label for="name">Name</label>
              <Input id="name" />
            </div>
            <div class="flex flex-col gap-1">
              <label for="email">Email</label>
              <Input id="email" type="email"/>
            </div>
            <div class="flex flex-col gap-1">
              <label for="password">Password</label>
              <Input id="password" type="password" />
            </div>
            <div class="flex flex-col gap-1">
              <label for="cnfpassword">Confirm Password</label>
              <Input id="cnfpassword" type="password" />
            </div>
            <button class="glass-green-dark text-white font-bold px-4 py-1 self-center">Register</button>
            <p class="self-center">Already have an account? <button onClick={() => setState(State.Login)} class="underline">Log in</button></p>
          </form>
        </div>
      </div>
    )
  }
  /* registerSuccess is true */
  return (
      <div class="grow flex justify-center items-center">
        <div class="sm:w-2/3 md:w-1/2 lg:w-1/3 xl:1/4 flex flex-col">
          <h1 class="text-white text-center text-3xl py-2 bg-green-800">Registration Successful</h1>
          <div class="flex justify-center bg-green-400 px-8 py-4 text-xl">
            <button class="bg-green-800 text-white font-bold px-4 py-1" onClick={() => setState(State.Login)}>Login</button>
          </div>
        </div>
      </div>
  )
}

function Login({ handleLogin }: { handleLogin: JSX.GenericEventHandler<HTMLFormElement> }) {
    return (
      <div class="grow flex justify-center items-center">
        <div class="w-full sm:w-7/12 md:w-1/2 lg:w-1/3 xl:1/4 flex flex-col">
          <div class="glass-green-dark">
            <h1 class="text-white text-center text-3xl py-2">Login</h1>
          </div>
          <form class="flex flex-col justify-start gap-4 px-8 py-4 glass text-xl" onSubmit={handleLogin}>
            <div class="flex flex-col gap-1">
              <label for="name">Name</label>
              <Input id="name" />
            </div>
            <div class="flex flex-col gap-1">
              <label for="password">Password</label>
              <Input id="password" type="password" />
            </div>
            <button class="glass-green-dark text-white font-bold px-4 py-1 self-center">Login</button>
            <p class="self-center">Forgot password?</p>
          </form>
        </div>
      </div>
    )
}

function Header({ setState }: { setState: StateUpdater<State> }) {
  return (
    <>
      <header class="glass bg-opacity-50 flex items-center justify-between px-4 text-xl">
        <button onClick={() => setState(State.Home)}><img src={vitalease} class="w-40 drop-shadow-md" /></button>
        <div class="flex gap-5">
          <button onClick={() => setState(State.Login)} class="px-8 py-2 glass-green-dark text-white font-black font-serif">Log in</button>
          <button onClick={() => setState(State.Register)} class="px-8 py-2 glass-green-dark text-white font-black font-serif">Sign up</button>
        </div>
      </header>
      <button>
        <img src={chatbot} class="bg-mygreen w-20 fixed bottom-0 right-0 m-4 p-4 rounded-full z-10" />
      </button>
    </>
  )
}

function App() {
  const [state, setState] = useState(State.Home);
  const [name, setName] = useState("");

  const handleLogin = (event: JSX.TargetedMouseEvent<HTMLFormElement>) => {
    event.preventDefault();
    setName((event.currentTarget.elements.namedItem("name") as HTMLInputElement).value);
    setState(State.Dashboard);
  }

  if (state == State.Home) {
    return (
      <>
        <div class="min-h-screen hero-image flex flex-col">
          <Header setState={setState} />
          <main class="flex grow justify-end items-center">
            <div class="flex flex-col items-center gap-4 max-w-prose p-12 glass">
              <div>
                <img src={vitalease} class="w-80 translate-x-6" />
                <p class="font-serif text-xl">Healthier and more connected future for all</p>
              </div>
              <p class="text-2xl font-serif text-center">Revolutionizing health management with intuitive schedules, emergency alerts, seamless communication, and AI-powered assistance.</p>
              <button class="glass-green-dark text-white text-xl font-bold px-4 py-1" onClick={() => setState(State.Register)}>JOIN NOW</button>
            </div>
          </main>
        </div>
        <div class="min-h-screen flex flex-col items-end py-[16vh] snap-center">
          <h1 class="glass-green-dark w-3/4 text-3xl text-white font-serif font-bold px-6 py-2">CALENDAR</h1>
          <div class="flex flex-col md:flex-row">
            <div class="basis-0 grow m-10"><img src={calendar} class="max-h-screen mx-auto" width="500" height="500" alt="" /></div>
            <p class="glass-green basis-0 grow text-3xl font-serif py-4 px-12 inline-block align-middle">Effortlessly manage your medication routine with daily, weekly, and monthly views. Drag-and-drop functionality ensures scheduling adjustments are a breeze</p>
          </div>
        </div>
        <div class="min-h-screen flex flex-col ">
          <div class="w-3/4 glass-green-dark flex justify-end">
            <h1 class="text-3xl text-white font-serif font-bold px-6 py-2">EMERGENCY CONTACTS</h1>
          </div>
          <div class="flex flex-col md:flex-row">
            <p class="glass-green basis-0 grow text-3xl py-4 px-12">Prioritize safety with an easily accessible emergency section. Reach out to designated contacts swiftly through in-app alerts and automated SMS notifications in critical situations.</p>
            <div class="basis-0 grow m-10"><img src={call} class="max-h-screen ml-auto" width="400" height="400" /></div>
          </div>
        </div>
        <div class="min-h-screen flex flex-col items-end ">
          <div class="w-3/4 glass-green-dark flex">
            <h1 class="text-3xl text-white font-serif font-bold px-6 py-2">MEDICAL RECORDS</h1>
          </div>
          <div class="flex flex-col md:flex-row">
            <div class="basis-0 grow m-10"><img src={records} class="max-h-screen mx-auto" width="500" height="500"/></div>
            <p class="glass-green basis-0 grow text-3xl py-4 px-12">Upload your medical records, set goals and visualize the progress you make. Share your records and get feedback and recommendations from doctors and experts.</p>
          </div>
        </div>
        <div class="min-h-screen flex flex-col ">
          <div class="w-3/4 glass-green-dark flex justify-end">
            <h1 class="text-3xl text-white font-serif font-bold px-6 py-2">AI CHATBOT</h1>
          </div>
          <div class="flex flex-col md:flex-row">
            <p class="glass-green basis-0 grow text-3xl py-4 px-12">Get instant answers to medication FAQs, dietary queries, and user assistance. Our friendly chatbot, powered by OpenAI, ensures a coversational interface for step-by-step guidance and troubleshooting.</p>
            <div class="basis-0 grow m-10"><img src={chat} class="max-h-screen mx-auto" width="500" height="500"/></div>
          </div>
        </div>
        <div class="h-screen flex flex-col gap-2 justify-center items-center glass-green">
          <p class="text-lg italic font-serif">Want to try it out...</p>
          <button class="bg-mygreen glass-green-dark text-white font-serif text-2xl font-bold px-10 py-6" onClick={() => setState(State.Register)}>JOIN NOW</button>
        </div>
      </>
    )
  } else if (state == State.Register) {
    return (
      <div class="min-h-screen bg-hero-pattern flex flex-col">
        <Header setState={setState} />
        <Register setState={setState} />
      </div>
    )
  } else if (state == State.Login) {
    return (
      <div class="min-h-screen bg-hero-pattern flex flex-col">
        <Header setState={setState} />
        <Login handleLogin={handleLogin} />
      </div>
    )
  }
  /* state is State.Dashboard */
  return <Dashboard name={name} />
}

render(<App />, document.getElementById("app")!)
/* vim: set et sw=2: */
