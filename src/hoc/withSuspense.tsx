import React from 'react'

export const withSuspense = (Component: React.ReactNode | any) => {
	return (props: any) => {
		return (
			<React.Suspense fallback={''}>
				<Component {...props} />
			</React.Suspense>
		)
	}
}
