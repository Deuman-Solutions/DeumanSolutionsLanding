import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { Toaster } from 'sileo'
import { AppRouter } from "./app.router"


const queryClient = new QueryClient() 


export const DeumanSolutionApp = () => {
  return (
      <QueryClientProvider client={queryClient}>
        <Toaster/>
        <AppRouter />
      </QueryClientProvider>

  )
}
