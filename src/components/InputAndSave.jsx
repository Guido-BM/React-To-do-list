import React from "react";
import { Form, Input, Button, Space } from "antd";

const InputAndSave = ({ newTodo }) => {
  const [form] = Form.useForm();
  const onFinish = (values) => {
    if (!values.text) return;
    newTodo(values);
    form.resetFields();
  };
  return (
    <div>
      <Form form={form} name="basicFormTodo" onFinish={onFinish}>
        <Form.Item name="text">
          <Space.Compact
            style={{
              width: "100%",
            }}
          >
            <Input size="small" placeholder="I have to..." />

            <Button
              size="small"
              onClick={() => {
                form.resetFields();
              }}
              htmlType="button"
            >
              Discard
            </Button>

            <Button size="small" type="primary" htmlType="submit">
              Save
            </Button>
          </Space.Compact>
        </Form.Item>
      </Form>
    </div>
  );
};

export default InputAndSave;
