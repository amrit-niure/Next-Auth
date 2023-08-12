import NextAuth from "next-auth/next";
import GoogleProvider from 'next-auth/providers/google'

function getGoogleCredentials() {
    const clientId = process.env.GOOGLE_CLIENT_ID
    const clientSecret = process.env.GOOGLE_CLIENT_SECRET
  
    if (!clientId || clientId.length === 0) {
      throw new Error('Missing GOOGLE_CLIENT_ID')
    }
  
    if (!clientSecret || clientSecret.length === 0) {
      throw new Error('Missing GOOGLE_CLIENT_SECRET')
    }
    return { clientId, clientSecret }
  }
  
const authOptions = {
    providers: [
        GoogleProvider({
          clientId: getGoogleCredentials().clientId,
          clientSecret: getGoogleCredentials().clientSecret,
        }),
      ],
      callbacks : {
        async signIn({user,account}){
          console.log("User : ",user)
          console.log("Account : ",account)
         
          if(account.provider === 'google'){
            const {name, email} = user
            try {
              const res = await fetch('http://localhost:3000/api/user',{
                method : "POST",
                headers : {
                  "Content-Type" :"application/json"
                },
                body : JSON.stringify({
                  name,
                  email
                })
              })
              if(res.ok){
                return user;
              }
            } catch (error) {
              console.log(error)
            }
          }
        }
      }
} 

const authHandler = NextAuth(authOptions)
export {authHandler as GET, authHandler as POST}