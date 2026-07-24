use std::io::{self, BufRead};

fn main() {
    let stdin = io::stdin();
    let mut code = String::new();
    if stdin.lock().read_line(&mut code).is_err() {
        eprintln!("Failed to read input");
        return;
    }
    let Some(open) = code.find('(') else {
        eprintln!("Missing opening parenthesis");
        return;
    };
    let Some(close) = code.rfind(')') else {
        eprintln!("Missing closing parenthesis");
        return;
    };
    if close <= open {
        eprintln!("Invalid expression");
        return;
    }
    let inside = code[open + 1..close].trim();

    if inside.starts_with('"') && inside.ends_with('"') && inside.len() >= 2 {
        println!("{}", &inside[1..inside.len() - 1]);
        return;
    }
    let Some((operator_index, operator)) = inside
        .char_indices()
        .find(|(_, character)| matches!(character, '+' | '-' | '*' | '/'))
    else {
        eprintln!("Missing arithmetic operator");
        return;
    };
    let left = inside[..operator_index].trim().parse::<i64>();
    let right = inside[operator_index + 1..].trim().parse::<i64>();

    let (Ok(a), Ok(b)) = (left, right) else {
        eprintln!("Invalid integer expression");
        return;
    };
    let result = match operator {
        '+' => Some(a + b),
        '-' => Some(a - b),
        '*' => Some(a * b),
        '/' if b != 0 => Some(a / b),
        '/' => {
            eprintln!("Cannot divide by zero");
            None
        }
        _ => None,
    };
    if let Some(value) = result {
        println!("{value}");
    }
}
