// project import
import Routes from 'routes';
import ThemeCustomization from 'themes';
import ScrollTop from 'components/ScrollTop';
import { AuthProvider } from 'routes/AuthProvider';
// ==============================|| APP - THEME, ROUTER, LOCAL  ||============================== //

const App = () => (
    <ThemeCustomization>
        <ScrollTop>
            <AuthProvider>
                <Routes />
            </AuthProvider>
        </ScrollTop>
    </ThemeCustomization>
);

export default App;
