import { Layout, Menu, Button, Space } from "antd";
import { UserOutlined, CalendarOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import { get, post } from "../../util/request";
import styles from "./styles.module.less";
import EventCard from "./EventCard";
import NewEventModal from "./NewEventModal";

const { Content, Footer, Sider } = Layout;

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const items = [
  getItem("Events", "1", <CalendarOutlined />),
  getItem("User", "sub1", <UserOutlined />, [
    getItem("Tom", "3"),
    getItem("Bill", "4"),
    getItem("Alex", "5"),
  ]),
];

export default function Dashboard() {
  const [siderIsCollapsed, setSiderIsCollapsed] = useState(true);
  const [newEventModalIsVisible, setNewEventModalIsVisible] = useState(false);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    (async () => {
      const { body } = await get("/api/events");
      setEvents(body);
    })();
  }, []);

  const handleSiderCollapse = (collapsed) => {
    setSiderIsCollapsed(collapsed);
  };

  const handleNewEventModalCancel = () => setNewEventModalIsVisible(false);
  const handleNewEventModalCreate = async (values) => {
    await post("/api/events/", values);
    setNewEventModalIsVisible(false);
  };

  const showNewEventModal = () => {
    setNewEventModalIsVisible(true);
  };

  return (
    <Layout className={styles.container}>
      <Sider
        collapsible
        collapsed={siderIsCollapsed}
        onCollapse={handleSiderCollapse}
        className={styles.sider}
      >
        <Menu
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={items}
        />
      </Sider>

      <Layout>
        <Content className={styles.content}>
          <Space direction={"vertical"} size={"middle"} className={"flex"}>
            <Button type="primary" onClick={showNewEventModal}>
              New Event
            </Button>

            <NewEventModal
              visible={newEventModalIsVisible}
              onCancel={handleNewEventModalCancel}
              onCreate={handleNewEventModalCreate}
            />

            <Space direction={"vertical"} className={"flex"}>
              {events?.map((event) => (
                <EventCard key={event.id} data={event} />
              ))}
            </Space>
          </Space>
          <Footer className={styles.footer}>Grass ©2022</Footer>
        </Content>
      </Layout>
    </Layout>
  );
}
