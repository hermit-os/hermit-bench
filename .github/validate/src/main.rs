use serde_json::Value;
use std::env;
use std::fs;
use std::path::Path;

fn main() -> Result<(), Box<dyn std::error::Error>> {
    let args: Vec<String> = env::args().collect();

    if args.len() < 2 {
        eprintln!("Usage: {} <path-to-json-file>", args[0]);
        std::process::exit(1);
    }

    let file_path = &args[1];
    println!("Validating Results file: {file_path}");

    // Check if file exists
    if !Path::new(file_path).exists() {
        eprintln!("Error: File '{file_path}' does not exist");
        std::process::exit(1);
    }

    // Read the file content
    let data = fs::read_to_string(file_path)?;

    // Parse the JSON
    let json: Value = serde_json::from_str(&data)?;

    // Perform validation tests
    validate_results(&json)?;

    println!("Result validation successful!");
    Ok(())
}

fn validate_results(json: &Value) -> Result<(), Box<dyn std::error::Error>> {
    // Check number of objects
    if json.as_array().unwrap().len() != 7 {
        return Err("Results should be exactly 7 objects".into());
    }

    // Check for required fields in each object
    for (i, item) in json.as_array().unwrap().iter().enumerate() {
        if !item.is_object() {
            return Err(format!("Item {i} is not an object").into());
        }

        let name = item
            .get("name")
            .and_then(|n| n.as_str())
            .unwrap_or("unnamed");

        if item.get("name") == Some(&Value::from("bench_1")) {
            if item.get("unit") != Some(&Value::from("s")) {
                return Err(format!(
                    "Item {i} (name: {name}) has incorrect unit, expected 's'"
                )
                .into());
            }
            if item.get("value") != Some(&Value::from(10.0)) {
                return Err(format!(
                    "Item {i} (name: {name}) has incorrect value, expected 10.0"
                )
                .into());
            }
            if item.get("group") != Some(&Value::from("Test Group")) {
                return Err(format!(
                    "Item {i} (name: {name}) has incorrect group, expected 'Test Group'"
                )
                .into());
            }
            if item.get("plot_group") != Some(&Value::from("Test Plot Group 2")) {
                return Err(format!(
                    "Item {i} (name: {name}) has incorrect plot_group, expected 'Test Plot Group 2'"
                )
                .into());
            }
            if item.get("range") != Some(&Value::from(0.0)) {
                return Err(format!(
                    "Item {i} (name: {name}) has incorrect range, expected 0.0"
                )
                .into());
            }
        }

        if item.get("name") == Some(&Value::from("bench_2")) {
            if item.get("unit") != Some(&Value::from("s")) {
                return Err(format!(
                    "Item {i} (name: {name}) has incorrect unit, expected 's'"
                )
                .into());
            }
            if item.get("value") != Some(&Value::from(20.0)) {
                return Err(format!(
                    "Item {i} (name: {name}) has incorrect value, expected 20.0"
                )
                .into());
            }
            if item.get("group") != Some(&Value::from("Test Group")) {
                return Err(format!(
                    "Item {i} (name: {name}) has incorrect group, expected 'Test Group'"
                )
                .into());
            }
            if item.get("plot_group") != Some(&Value::from("Test Plot Group 2")) {
                return Err(format!(
                    "Item {i} (name: {name}) has incorrect plot_group, expected 'Test Plot Group 2'"
                )
                .into());
            }
            if item.get("range") != Some(&Value::from(0.0)) {
                return Err(format!(
                    "Item {i} (name: {name}) has incorrect range, expected 0.0"
                )
                .into());
            }
        }

        if item.get("name") == Some(&Value::from("test1 Build Time")) {
            if item.get("unit") != Some(&Value::from("s")) {
                return Err(format!(
                    "Item {i} (name: {name}) has incorrect unit, expected 's'"
                )
                .into());
            }
            if let Some(value) = item.get("value") {
                if value.as_f64().unwrap_or(0.0) < 1.0 {
                    return Err(format!(
                        "Item {i} (name: {name}) has incorrect value (Too quick), expected >= 1.0"
                    )
                    .into());
                }
            } else {
                return Err(format!("Item {i} (name: {name}) is missing value field").into());
            }
            if item.get("group") != Some(&Value::from("Build")) {
                return Err(format!(
                    "Item {i} (name: {name}) has incorrect group, expected 'Build'"
                )
                .into());
            }
            if item.get("plot_group") != Some(&Value::from("none")) {
                return Err(format!(
                    "Item {i} (name: {name}) has incorrect plot_group, expected 'none'"
                )
                .into());
            }
            if item.get("range") != Some(&Value::from(0.0)) {
                return Err(format!(
                    "Item {i} (name: {name}) has incorrect range, expected 0.0"
                )
                .into());
            }
        }
    }
    Ok(())
}
