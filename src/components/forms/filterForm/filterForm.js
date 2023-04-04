import { PlusOneOutlined } from "@mui/icons-material";
import { Form, Button, Checkbox, DatePicker, Input, Select, Space } from "antd";
import Upload from "antd/es/upload/Upload";
import { PlusOutlined } from "@ant-design/icons";
import TextArea from "antd/es/input/TextArea";
import { saveWorkerData } from "../../../services/workersServices/workers";
import { useState } from "react";
import SearchBar from "../../search/searchBar";
import AntdSearch from "../../search/antdSearch";

const FilterForm = ({
	categories,
	setCenter,
	setDistance,
	setCurretCategory,
}) => {
	const [address, setAddress] = useState(null);
	const handleSubmit = async (values) => {
		console.log("values ", values);
		setDistance(values.distance);
		setCurretCategory(values.category);
	};
	return (
		<Form
			autoComplete="off"
			labelCol={{ span: 10 }}
			wrapperCol={{ span: 14 }}
			onFinish={handleSubmit}
			onFinishFailed={(error) => {
				console.log({ error });
			}}
		>
			<Form.Item name="locality" label="Locality">
				{/* <Input placeholder="Locality" /> */}
				<AntdSearch
					setCenter={setCenter}
					setAddress={setAddress}
					address={address}
				/>
			</Form.Item>
			<Form.Item
				name="distance"
				label="Distance in KM"
				rules={[
					{
						required: true,
						message: "Please enter the distance",
					},
					{ whitespace: true },
					{
						validator: (_, value) => {
							if (/^[0-9]+$/.test(value)) {
								return Promise.resolve();
							} else {
								return Promise.reject("Some message here");
							}
						},
					},
				]}
				hasFeedback
			>
				<Input placeholder="Distance" />
			</Form.Item>
			<Form.Item name="category" label="Category" requiredMark="optional">
				<Select placeholder="Select A Category">
					{categories.map((value, i) => {
						return (
							<Select.Option value={value.category} key={value.id}>
								{value.category}
							</Select.Option>
						);
					})}
				</Select>
			</Form.Item>

			<Form.Item wrapperCol={{ span: 24 }}>
				<Button block type="primary" htmlType="submit">
					Search
				</Button>
			</Form.Item>
		</Form>
	);
};

export default FilterForm;
