import UsersListItem from './UsersListItem';

export default {
  title: 'Components/Molecules/UsersListItem',
  component: UsersListItem,
};

const mockedData = {
  name: 'Adam Romański',
  average: '3.5',
  attendance: '55%',
};

const Template = (args) => <UsersListItem {...args} />;

export const Default = Template.bind({});

Default.args = {
  userData: {
    name: 'Adam Romański',
    average: '3.5',
    attendance: '55%',
  },
};

export const GoodGrades = Template.bind({});

GoodGrades.args = {
  userData: {
    name: 'Adam Romański',
    average: '5',
    attendance: '55%',
  },
};
