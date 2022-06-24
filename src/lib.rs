use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn sums(value: u32) -> u32 {
    return (1 + value) * value / 2;
}

#[test]
fn test_sums() {
    assert_eq!(sums(100), 5050);
}
#[test]
fn test_sums_min() {
    assert_eq!(sums(0), 0);
}
#[test]
fn test_sums_max() {
    assert_eq!(sums(65535), 2147450880);
}
#[test]
#[should_panic(expected = "attempt to multiply with overflow")]
fn test_sums_overflow() {
    sums(65536);
}
