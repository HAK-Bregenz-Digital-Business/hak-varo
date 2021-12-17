import { Registration } from '@hak-varo/registration';

export const App = () => {
  return (
    <Registration
      endDate={new Date(2021, 11, 18)}
      registrationURL="https://forms.gle/y2EwntW7L2V67aDe6"
    />
  );
};

export default App;
