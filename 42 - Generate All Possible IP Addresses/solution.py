def restore_ip_addresses(s):
    result = []

    def backtrack(start, path):
        if len(path) == 4:
            if start == len(s):
                result.append('.'.join(path))
            return

        for length in range(1, 4):  # Try segments of length 1, 2, or 3
            if start + length > len(s):
                break
            segment = s[start:start + length]
            
            # Skip if the segment has leading zeros or is > 255
            if (segment.startswith('0') and len(segment) > 1) or int(segment) > 255:
                continue

            backtrack(start + length, path + [segment])

    backtrack(0, [])
    return result


# Test cases
print(restore_ip_addresses('25525511135'))