import { DatePicker, Form, Input, Modal } from "antd";

export default function NewEventModal({ visible, onCreate, onCancel }) {
  const [form] = Form.useForm();

  return (
    <Modal
      title="New Event"
      visible={visible}
      okText="Create"
      cancelText="Cancel"
      onOk={() => {
        form
          .validateFields()
          .then((values) => {
            form.resetFields();
            onCreate?.({ ...values, date: values.date.utc().format() });
          })
          .catch(() => {});
      }}
      onCancel={onCancel}
    >
      <Form form={form} layout="vertical" name="new-event" autoComplete="on">
        <Form.Item
          label="Title"
          name="title"
          rules={[{ required: true, message: "Please input a title" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Description"
          name="description"
          rules={[{ required: true, message: "Please input a description" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Date"
          name="date"
          rules={[{ required: true, message: "Please select a date" }]}
        >
          <DatePicker
            showTime={{
              format: "HH:mm",
              minuteStep: 5,
            }}
            format="YYYY-MM-DD HH:mm"
          />
        </Form.Item>
      </Form>
    </Modal>
  );
}
