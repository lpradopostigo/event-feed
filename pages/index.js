import styles from "./Home.module.less";
import { Alert, Button, Checkbox, Form, Input, Space } from "antd";
import { useRouter } from "next/router";
import { post } from "../util/request";
import { useState } from "react";

export default function Home() {
  const router = useRouter();
  const [loginFailed, setLoginFailed] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  const handleFinish = async (value) => {
    const response = await post("/api/login", value);

    if (response.ok) {
      router.push(response.body.is_admin ? "/dashboard" : "/login");
    } else {
      setAlertMessage(response.body.message);
      setLoginFailed(true);
    }
  };

  const handleFieldsChange = () => setLoginFailed(false);

  return (
    <div className={styles.container}>
      <Form
        name="login"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        autoComplete="on"
        onFinish={handleFinish}
        onFieldsChange={handleFieldsChange}
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="register"
          valuePropName="checked"
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Checkbox>Register</Checkbox>
        </Form.Item>

        {loginFailed && (
          <Alert className={styles.alert} message={alertMessage} type="error" />
        )}

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
