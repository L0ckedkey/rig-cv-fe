"use client"

import type React from "react"
import { useEffect, useState } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"

export default function Login() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [rememberMe, setRememberMe] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      const res = await fetch("http://localhost:3000/trainee/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
        }),
      })
      if (!res.ok) {
        throw new Error("Login gagal")
      }else{
        const data = await res.json()
        localStorage.setItem("token", data.access_token)
        router.push('/')
      }

     
    } catch (err) {
      console.error("Error:", err)
      alert("Login gagal, periksa username/password!")
    }
  }

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-blue-500 via-blue-400 to-cyan-400 flex items-center justify-center p-4">
        <div className="w-[40vw] max-w-md relative">
        <div className="relative bg-white rounded-[5px] shadow-2xl overflow-hidden ">
            <div className="bg-white px-8 flex items-center justify-items-start gap-4">
            <Image
                src="/images/ribbon.png"
                alt="BINUS University - New Assistant Recruitment"
                width={50}
                height={200}
                className="object-contain"
            />
            <Image
                src="/images/ci_nar.png"   // image ada di folder /public
                alt="My photo"
                width={150}
                height={150}
                />
            </div>

            {/* Form Content */}
            <form onSubmit={handleSubmit} className="p-8 space-y-6">
            <div className="flex items-center border border-gray-300 rounded-lg px-4 py-3 bg-gray-50">
                <span className="text-gray-400 text-lg">👤</span>
                <input
                type="text"
                value={username}
                placeholder="Username"
                onChange={(e) => setUsername(e.target.value)}
                className="flex-1 ml-3 bg-transparent outline-none text-gray-700 text-sm font-medium"
                />
            </div>

            <div className="flex items-center border border-gray-300 rounded-lg px-4 py-3 bg-gray-50">
                <span className="text-gray-400 text-lg">🔐</span>
                <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="flex-1 ml-3 bg-transparent outline-none text-gray-700 text-sm font-medium"
                />
            </div>

            {/* Remember Me Checkbox */}
            <div className="flex items-center gap-3">
                <input
                type="checkbox"
                id="remember"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="w-5 h-5 accent-blue-600 cursor-pointer rounded"
                />
                <label htmlFor="remember" className="text-sm text-gray-700 cursor-pointer font-medium">
                Remember Me
                </label>
            </div>

            <button
                type="submit"
                className="w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-full hover:bg-blue-700 transition-colors duration-200 shadow-md text-sm tracking-wide mt-8"
            >
                LOG IN
            </button>
            </form>
        </div>
        </div>
    </div>
  )
}
