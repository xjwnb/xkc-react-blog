import React, { useState, useEffect } from "react";
import "./index.less";
// antd
import { Drawer, Form, Input, Button, message } from "antd";
// 请求
import { postLinksInfo, getLinksInfoByPass } from "@/api/links";
// 组件
import { LinkDiv } from "./components";

export default function Links() {
  // 抽屉是否展示
  const [drawerVisible, setDrawerVisible] = useState(false);
  // 友链信息
  const [linksInfo, setlinksInfo] = useState([])
  // form
  const [form] = Form.useForm();

  useEffect(async() => {
    // 获取友链信息
    let linkInfo = await getLinksInfoByPassData()
    setlinksInfo(linkInfo);
  }, []);

  // 开启抽屉
  const showDrawer = () => {
    setDrawerVisible(true);
  };

  // 关闭抽屉
  const onClose = () => {
    setDrawerVisible(false);
    // 重置表单
    form.resetFields();
  };

  const layout = {
    labelCol: {
      span: 6,
    },
    wrapperCol: {
      span: 18,
    },
  };
  const tailLayout = {
    wrapperCol: {
      offset: 8,
      span: 16,
    },
  };

  // 正确提交
  const onFinish = async (values) => {
    // 提交友链信息
    let successMsg = await postLinksInfoData(values);
    message.success(`${successMsg}，请等待审核通过！`);
    // 重置表单
    form.resetFields();
  };

  // 提交友链
  const postLinksInfoData = (linksInfo) => {
    return new Promise((resolve, reject) => {
      postLinksInfo(linksInfo)
        .then((res) => {
          if (res.code === 200) {
            resolve(res.data.msg);
          }
        })
        .catch((err) => {
          message.warning("提交失败，500");
        });
    });
  };

  // 获取友链信息（已通过）
  const getLinksInfoByPassData = () => {
    return new Promise((resolve, reject) => {
      getLinksInfoByPass()
        .then(res => {
          if (res.code === 200) {
            resolve(res.data.linksInfo);
          }
        })
        .catch(err => {
          console.log(err);
        })
    })
  }

  // 失败提交
  const onFinishFailed = (errorInfo) => {
    message.warning("提交的内容不符合规范");
  };
  return (
    <div className="links">
      {/* link 友链展示 */}
      <div className="links-pass-div">
        {
          linksInfo.map(link => {
            return (
              <div key={link.id} className="links-div">
                <LinkDiv link={link} />
              </div>
            )
          })
        }
      </div>
      {/* 提交按钮 */}
      <div className="links-submit-btn" onClick={showDrawer}>
        提交链接信息
      </div>
      <Drawer
        title="填写链接信息"
        width={450}
        onClose={onClose}
        visible={drawerVisible}
        bodyStyle={{ paddingBottom: 80 }}
      >
        <div className="links-submit-form">
          <Form
            form={form}
            {...layout}
            name="basic"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <Form.Item
              label="网址名称"
              name="name"
              rules={[
                {
                  required: true,
                  message: "请输入你的网址名称！",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="网址链接"
              name="website"
              rules={[
                {
                  required: true,
                  message: "请输入你的网址链接！",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="LOGO链接"
              name="logoUrl"
              rules={[
                {
                  required: true,
                  message: "请输入你的LOGO链接！",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="网址描述"
              name="description"
              rules={[
                {
                  required: true,
                  message: "请输入你的网址描述！",
                },
              ]}
            >
              <Input.TextArea />
            </Form.Item>

            <Form.Item {...tailLayout}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      </Drawer>
    </div>
  );
}
