import { useEffect, useRef, useState } from "react";
import { labels } from "../constants/labels";
import { buildOrderText, validateOrder, type OrderErrors, type OrderField, type OrderValues } from "../lib/order";
import { ParcelCard } from "./ParcelCard";

const empty: OrderValues = {
  from: "",
  to: "",
  note: "",
  buyer: "",
  phone: "",
  area: "",
  qty: 1,
};

const fieldOrder: OrderField[] = ["from", "to", "buyer", "phone", "area"];

export function OrderDesk() {
  const [values, setValues] = useState<OrderValues>(empty);
  const [errors, setErrors] = useState<OrderErrors>({});
  const [done, setDone] = useState(false);
  const [slip, setSlip] = useState("");
  const [copied, setCopied] = useState(false);
  const doneRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (done) doneRef.current?.focus();
  }, [done]);

  function set<K extends keyof OrderValues>(key: K, value: OrderValues[K]) {
    setValues((current) => ({ ...current, [key]: value }));
    if (key !== "note" && key !== "qty") {
      setErrors((current) => ({ ...current, [key]: undefined }));
    }
  }

  async function copySlip(text: string) {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  }

  function submit() {
    const next = validateOrder(values);
    setErrors(next);
    const first = fieldOrder.find((field) => next[field]);
    if (first) {
      document.getElementById(`field-${first}`)?.focus();
      return;
    }
    const text = buildOrderText(values);
    setSlip(text);
    setDone(true);
    void copySlip(text);
    window.open(labels.contact.zalo, "_blank", "noopener,noreferrer");
  }

  return (
    <section className="order" id="dat-hang">
      <div className="wrap order-layout">
        <div className="order-preview">
          <ParcelCard from={values.from} to={values.to} note={values.note} />
        </div>
        <div className="order-panel">
          <p className="kicker">{labels.order.kicker}</p>
          <h2>{labels.order.title}</h2>
          <p className="lede">{labels.order.lede}</p>
          <div className="price">
            <span>{labels.order.priceLabel}</span>
            <strong>{labels.order.price}</strong>
            <p>{labels.order.priceNote}</p>
          </div>

          {done ? (
            <div className="order-done">
              <h3 ref={doneRef} tabIndex={-1}>
                {labels.order.doneTitle}
              </h3>
              <p>{labels.order.doneBody}</p>
              <p className="copy-state">{copied ? labels.order.copied : labels.order.copyFailed}</p>
              <textarea readOnly value={slip} rows={8} />
              <div className="hero-actions">
                <a className="btn" href={labels.contact.zalo} target="_blank" rel="noreferrer">
                  {labels.order.openZalo}
                </a>
                <a className="btn btn-ghost" href={labels.contact.phoneHref}>
                  {labels.order.callConfirm}
                </a>
                <button type="button" className="btn btn-ghost" onClick={() => void copySlip(slip)}>
                  {labels.order.copyAgain}
                </button>
              </div>
              <button
                type="button"
                className="text-button"
                onClick={() => {
                  setDone(false);
                  setCopied(false);
                }}
              >
                {labels.order.edit}
              </button>
            </div>
          ) : (
            <form
              className="order-form"
              onSubmit={(event) => {
                event.preventDefault();
                submit();
              }}
            >
              <div className="form-grid">
                <Field
                  id="field-from"
                  label={labels.order.from}
                  value={values.from}
                  error={errors.from}
                  autoComplete="nickname"
                  onChange={(value) => set("from", value)}
                />
                <Field
                  id="field-to"
                  label={labels.order.to}
                  value={values.to}
                  error={errors.to}
                  autoComplete="off"
                  onChange={(value) => set("to", value)}
                />
                <Field
                  id="field-buyer"
                  label={labels.order.buyer}
                  value={values.buyer}
                  error={errors.buyer}
                  autoComplete="name"
                  onChange={(value) => set("buyer", value)}
                />
                <Field
                  id="field-phone"
                  label={labels.order.phone}
                  value={values.phone}
                  error={errors.phone}
                  autoComplete="tel"
                  inputMode="tel"
                  hint={labels.order.phoneHint}
                  onChange={(value) => set("phone", value)}
                />
                <div className={errors.area ? "field is-bad" : "field"}>
                  <label htmlFor="field-area">{labels.order.area}</label>
                  <div className="select-wrap">
                    <select
                      id="field-area"
                      value={values.area}
                      aria-invalid={Boolean(errors.area)}
                      onChange={(event) => set("area", event.target.value)}
                    >
                      <option value="">{labels.order.areaPlaceholder}</option>
                      {labels.order.areas.map((area) => (
                        <option key={area} value={area}>
                          {area}
                        </option>
                      ))}
                    </select>
                  </div>
                  {errors.area ? <p role="alert">{errors.area}</p> : null}
                </div>
                <div className="field">
                  <span id="qty-label">{labels.order.qty}</span>
                  <div className="stepper" role="group" aria-labelledby="qty-label">
                    <button
                      type="button"
                      aria-label={labels.order.qtyMinus}
                      onClick={() => set("qty", Math.max(1, values.qty - 1))}
                    >
                      {labels.order.minus}
                    </button>
                    <strong>{values.qty}</strong>
                    <button
                      type="button"
                      aria-label={labels.order.qtyPlus}
                      onClick={() => set("qty", Math.min(9, values.qty + 1))}
                    >
                      {labels.order.plus}
                    </button>
                  </div>
                </div>
                <div className="field span-2">
                  <label htmlFor="field-note">{labels.order.note}</label>
                  <textarea
                    id="field-note"
                    rows={2}
                    maxLength={80}
                    placeholder={labels.order.notePlaceholder}
                    value={values.note}
                    onChange={(event) => set("note", event.target.value)}
                  />
                </div>
              </div>
              <div className="hero-actions">
                <button type="submit" className="btn">
                  {labels.order.submit}
                </button>
                <a className="btn btn-ghost" href={labels.contact.phoneHref}>
                  {labels.order.call}
                </a>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function Field({
  id,
  label,
  value,
  error,
  onChange,
  autoComplete,
  inputMode,
  hint,
}: {
  id: string;
  label: string;
  value: string;
  error?: string;
  onChange: (value: string) => void;
  autoComplete: string;
  inputMode?: "tel";
  hint?: string;
}) {
  return (
    <div className={error ? "field is-bad" : "field"}>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        value={value}
        maxLength={40}
        autoComplete={autoComplete}
        inputMode={inputMode}
        aria-invalid={Boolean(error)}
        onChange={(event) => onChange(event.target.value)}
      />
      {hint && !error ? <p className="hint">{hint}</p> : null}
      {error ? <p role="alert">{error}</p> : null}
    </div>
  );
}
