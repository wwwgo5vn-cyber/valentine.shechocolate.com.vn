import { labels } from "../constants/labels";

export type OrderValues = {
  from: string;
  to: string;
  note: string;
  buyer: string;
  phone: string;
  area: string;
  qty: number;
};

export type OrderField = "from" | "to" | "buyer" | "phone" | "area";
export type OrderErrors = Partial<Record<OrderField, string>>;

export function isPhone(value: string) {
  const digits = value.replace(/[^\d+]/g, "");
  return /^(0\d{9}|\+84\d{9})$/.test(digits);
}

export function validateOrder(values: OrderValues): OrderErrors {
  const errors: OrderErrors = {};
  if (!values.from.trim()) errors.from = labels.order.errors.from;
  if (!values.to.trim()) errors.to = labels.order.errors.to;
  if (!values.buyer.trim()) errors.buyer = labels.order.errors.buyer;
  if (!isPhone(values.phone)) errors.phone = labels.order.errors.phone;
  if (!values.area) errors.area = labels.order.errors.area;
  return errors;
}

export function buildOrderText(values: OrderValues) {
  const lines = [
    labels.order.slip.title,
    `${labels.order.slip.from}: ${values.from.trim()}`,
    `${labels.order.slip.to}: ${values.to.trim()}`,
  ];
  if (values.note.trim()) {
    lines.push(`${labels.order.slip.note}: ${values.note.trim()}`);
  }
  lines.push(
    `${labels.order.slip.buyer}: ${values.buyer.trim()}`,
    `${labels.order.slip.phone}: ${values.phone.trim()}`,
    `${labels.order.slip.area}: ${values.area}`,
    `${labels.order.slip.qty}: ${values.qty}`,
  );
  return lines.join("\n");
}
