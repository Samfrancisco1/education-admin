import React, { Component } from 'react';
import {AutoComplete, Button, Card, DatePicker, Form, Icon, Input , Tooltip} from "antd";
import axios from 'util/Api';


const FormItem = Form.Item;



class School extends Component{

  state = {
    confirmDirty: false,
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        axios.post('admins/create_school', {
          data: values
        });
        console.log(values.name);
      }
    });
  }
  handleConfirmBlur = (e) => {
    const value = e.target.value;
    this.setState({confirmDirty: this.state.confirmDirty || !!value});
  }

  onChange = (date, dateString) => {
    console.log(date, dateString);
  }

  render() {
    const {getFieldDecorator} = this.props.form;

    const formItemLayout = {
      labelCol: {
        xs: {span: 24},
        sm: {span: 8},
      },
      wrapperCol: {
        xs: {span: 24},
        sm: {span: 16},
      },
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 16,
          offset: 8,
        },
      },
    };

    return (
      <Card className="gx-card" title="Create A School Form">
        <Form onSubmit={this.handleSubmit}>
        <FormItem
            {...formItemLayout}
            label="School Name"
          >
            {getFieldDecorator('name', {
              rules: [{required: true, message: 'Please input a name!'}],
            })(
              <AutoComplete
                placeholder="School Name"
              >
                <Input />
              </AutoComplete>
            )}
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="School Address"
          >
            {getFieldDecorator('address', {
              rules: [{required: true, message: 'Please input an address!'}],
            })(
              <AutoComplete
                placeholder="School Address"
              >
                <Input />
              </AutoComplete>
            )}
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="Email Address"
          >
            {getFieldDecorator('email', {
              rules: [{required: true, message: 'Please input an address!'}],
            })(
              <AutoComplete
                placeholder="Email Address"
              >
                <Input />
              </AutoComplete>
            )}
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="Password"
          >
            {getFieldDecorator('password', {
              rules: [{required: true, message: 'Please input a password!'}],
            })(
              <AutoComplete
                placeholder="Password"
              >
                <Input type="password" />
              </AutoComplete>
            )}
          </FormItem>
          <FormItem
            {...formItemLayout}
            label={(
              <span>
              School Founded On&nbsp;
                <Tooltip title="The date school was founded">
                <Icon type="question-circle-o"/>
              </Tooltip>
            </span>
            )}
          >
            {getFieldDecorator('date', {
              rules: [{required: true, message: 'Please input the date school was found!'}],
            })(
              <DatePicker onChange={this.onChange} />
            )}
          </FormItem>
          <FormItem {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit">Create School</Button>
          </FormItem>
        </Form>
      </Card>
    );
  }
}
const SchoolForm = Form.create()(School);
export default SchoolForm;
