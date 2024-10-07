import * as React from 'react'
import PropTypes from 'prop-types'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { AppProvider } from '@toolpad/core/AppProvider'
import { DashboardLayout } from '@toolpad/core/DashboardLayout'
import theme from '../../theme'
import Navigation from './Nav'


function DemoPageContent({ pathname }) {
  return (
    <Box
      sx={{
        py: 4,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center'
      }}
    >
      <Typography>Đây là {pathname}</Typography>
    </Box>
  )
}

DemoPageContent.propTypes = {
  pathname: PropTypes.string.isRequired
}

function DashboardLayoutBasic(props) {
  const { window } = props

  const [pathname, setPathname] = React.useState('/dashboard')

  const router = React.useMemo(() => {
    return {
      pathname,
      searchParams: new URLSearchParams(),
      navigate: (path) => setPathname(String(path))
    }
  }, [pathname])

  const demoWindow = window !== undefined ? window() : undefined

  return (
    <AppProvider
      navigation={Navigation}
      router={router}
      theme={theme}
      window={demoWindow}
    >
      <DashboardLayout>
        <DemoPageContent pathname={pathname} />
      </DashboardLayout>
    </AppProvider>
  )
}

DashboardLayoutBasic.propTypes = {
  window: PropTypes.func
}

export default DashboardLayoutBasic
