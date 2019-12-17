import React, { Component } from 'react';
import {AutoComplete, Button, Card, DatePicker, Form, Icon, Input, Select, Tooltip} from "antd";

const FormItem = Form.Item;


class Branch extends Component{

  state = {
    confirmDirty: false,
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        this.props.showAuthLoader();
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
    const { Option } = Select;

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
    const prefixSelector = getFieldDecorator('prefix', {
      initialValue: '234',
    })(
      <Select style={{width: 70}}>
        <Option value="234">+234</Option>
      </Select>
    );

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
            label="Select School Type"
          >
            {getFieldDecorator('type', {
              rules: [{required: true, message: 'Please input an school type!'}],
            })(
              <Select defaultValue="Secondary" >
                <Option selected value="Secondary">Secondary</Option>
                <Option value="Primary">Primary</Option>
              </Select>
            )}
          </FormItem>
          <FormItem
            {...formItemLayout}
            label={(
              <span>
              School Motto &nbsp;
                <Tooltip title="Please enter school motto">
                <Icon type="question-circle-o"/>
              </Tooltip>
            </span>
            )}
          >
            {getFieldDecorator('motto', {
              rules: [{required: true, message: 'Please input school motto!', whitespace: true}],
            })(
              <Input/>
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
          <FormItem
            {...formItemLayout}
            label="Phone Number"
          >
            {getFieldDecorator('phone', {
              rules: [{required: true, message: 'Please input your phone number!'}],
            })(
              <Input addonBefore={prefixSelector} style={{width: '100%'}}/>
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
const BranchForm = Form.create()(Branch);
export default BranchForm;
