import React from 'react';
import '../github.css'
import '../frameworks.css'


import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Button from '../elements/Button';
import IssueFormNew from '../IssueFormNew';
import IssueItem from '../IssueList/IssueItem/issueItem';
import IssueList from '../IssueList/IssueList';
import IssueListPage from '../pages/IssueListPage';

storiesOf('Button', module)
  .add('regular with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('on the right', () => <Button position={'float-right'}>right button</Button>)
  ;

storiesOf('Form', module)
  .add('regular form', () => <IssueFormNew submitText="Submit"/>)
  ;

  const issues = [
    {id:1, title:'issue 1', username:'Paul', description:'this is an issue', status:'open'},
    {id:2, title:'issue 2', username:'Miguel', description:'this is an issue', status:'closed'},
    {id:3, title:'issue 3', username:'Matt', description:'this is an issue', status:'closed'},
    {id:4, title:'issue 4', username:'paulnta', description:'this is an issue', status:'open'},
    {id:5, title:'issue 5', username:'Migi', description:'this is an issue', status:'open'},
    {id:6, title:'issue 6', username:'Tommy', description:'this is an issue', status:'closed'},
    {id:7, title:'issue 7', username:'Fred', description:'this is an issue', status:'open'},
    {id:8, title:'issue 8', username:'Marcel', description:'this is an issue', status:'open'}
  ]

storiesOf('List', module)
  .add('List Item Open', () => <IssueItem id={1} title={'My Issue'} status={'open'} username={'paul'} />)
  .add('List Item Closed', () => <IssueItem id={2} title={'My Issue'} status={'closed'} username={'miguel'} />)
  .add('List', () => <IssueList issues={issues}/>)
  ;