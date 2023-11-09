module.exports.rahulApiSchema = 
{
    
    "type": "object",
    "properties": {
      "sodar_query_id": {
        "type": "string"
      },
      "injector_basename": {
        "type": "string"
      },
      "bg_hash_basename": {
        "type": "string"
      },
      "bg_binary": {
        "type": "string"
      },
      "rc_enable": {
        "type": "string"
      },
      "bg_snapshot_delay_ms": {
        "type": "string"
      },
      "is_gen_204": {
        "type": "string"
      }
    },
    "required": [
      "sodar_query_id",
      "injector_basename",
      "bg_hash_basename",
      "bg_binary",
      "rc_enable",
      "bg_snapshot_delay_ms",
      "is_gen_204"
    ]
  }