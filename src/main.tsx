import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.scss'
import { Provider } from 'react-redux'
import { store } from './store/index.ts'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import UserPage from './Pages/UserPage/UserPage.tsx'

const router = createBrowserRouter([
	{
	  path: "/gitusers",
	  element: <App />,
	},
	{
		path: "/username",
		element: <UserPage />
	}
 ]);

createRoot(document.getElementById('root')!).render(
	<Provider store={store}>
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>
	</Provider>
)